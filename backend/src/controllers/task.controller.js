
import { Task } from "../models/task.model.js";
import axios from "axios";

const API_URL = process.env.PYTHON_SERVICE_URL;

/**
 * Create a new task in the database.
 * @param {Object} req - Express request object containing task data in req.body
 * @param {Object} res - Express response object
 * @returns {Object} The created task as JSON
 */
export const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.json(task);
    } catch(err) {
        res.status(500).json({error: err.message});
    }
}

/**
 * Retrieve all tasks from the database, sorted by priority (high → medium → low).
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Array} Array of sorted tasks as JSON
 */
export const getTask = async (req, res) => {
    try {
        const tasks = await Task.find();
        // await connectDB()

        const priorityOrder = { high: 1, medium: 2, low: 3 };
        const sortedTasks = tasks.toSorted(
            (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
        );

        res.json(sortedTasks);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

/**
 * Retrieve a task by its ID.
 * @param {Object} req - Express request object containing task ID in req.params.id
 * @param {Object} res - Express response object
 * @returns {Object} Task as JSON
 */
export const getTaskById = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        res.json(task);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

/**
 * Update a task by its ID.
 * @param {Object} req - Express request object containing task ID in req.params.id and updated data in req.body
 * @param {Object} res - Express response object
 * @returns {Object} Updated task as JSON
 */
export const updateTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(task);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

/**
 * Delete a task by its ID.
 * @param {Object} req - Express request object containing task ID in req.params.id
 * @param {Object} res - Express response object
 * @returns {Object} Message confirming deletion
 */
export const deleteTask = async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.json({ message: "Task Deleted" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

/**
 * Classify a task description using an AI service.
 * @param {Object} req - Express request object containing description in req.body.description
 * @param {Object} res - Express response object
 * @returns {Object} Classification result from the AI service as JSON
 */
export const classifyTask = async (req, res) => {
    try {
        const { description } = req.body;
        const response = await axios.post(`${API_URL}/predict`, { description });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "AI service not reachable" });
    }
}
