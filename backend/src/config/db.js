import mongoose from "mongoose";

const DB_URL = process.env.MONGODB_URL
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectToDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(DB_URL, {
      serverSelectionTimeoutMS: 30000, // 30s instead of 10s
    }).then((mongoose) => mongoose);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectToDB;
