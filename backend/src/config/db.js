import mongoose from "mongoose";

const DB_URL = process.env.MONGODB_URL

export const connectDB = async () => {
    try {
        await mongoose.connect(DB_URL, {
  serverSelectionTimeoutMS: 30000, // 30 seconds instead of 10
});

        console.log("MongoDB Connected");
    } catch (error) {
        console.log("DB Error:", error);
    }
}
