import mongoose from "mongoose";

export const connectDB = async () => {
    try {
         const DB_URL = process.env.MONGODB_URL; 

        await mongoose.connect(DB_URL);

        console.log("MongoDB Connected");
    } catch (error) {
        console.log("DB Error:", error);
    }
}
