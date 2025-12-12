import express from "express";
import cors from "cors";
import taskrouter from './routes/task.routes.js'
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
dotenv.config();
const app = express()
console.log("Loaded MONGODB_URL:", process.env.MONGODB_URL);


app.use(cors());
app.use(express.json())
connectDB();

app.post('/login', (req, res) => {
    const { email } = req.body;
    res.json({message:"Login SUccess",email})
})

app.use("/tasks",taskrouter)

export default app;