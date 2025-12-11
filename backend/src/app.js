import express from "express";
import cors from "cors";
import taskrouter from './routes/task.routes.js'
import dotenv from "dotenv";
const app = express()

dotenv.config();
app.use(cors())
app.use(express.json())

app.post('/login', (req, res) => {
    const { email } = req.body;
    res.json({message:"Login SUccess",email})
})

app.use("/tasks",taskrouter)

export default app;