import express from "express"
import { classifyTask, createTask, deleteTask, getTask, getTaskById, updateTask } from "../controllers/task.controller.js"

const router = express.Router()
router.post("/", createTask)
router.get("/", getTask)
router.post("/classify", classifyTask)
router.get("/:id", getTaskById)
router.put("/:id", updateTask)
router.delete("/:id", deleteTask)


export default router;