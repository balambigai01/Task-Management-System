import { Task } from "@/types/task";
import axios from "axios";

const API_URL = "https://taskmanagement-seven-alpha.vercel.app/";

export const getTasks = async (): Promise<Task[]> => {
    try {
        const res = await axios.get(API_URL);
        return res.data ;
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const getTaskById = async (id:string) => {
    try {
        const res = await axios.get(`${API_URL}/${id}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const createTask = async (task: Omit<Task, "_id">): Promise<Task> => {
    try {
        const res = await axios.post(API_URL, task)
        return res.data
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const updateTask = async (id:string,task: Partial<Task>):Promise<Task>=> {
    try {
        console.log("************************************")
        console.log(id)
        const res = await axios.put(`${API_URL}/${id}`, task)
        console.log("rws",res)
        return res.data
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const deleteTask = async (id:string): Promise<{ message: string }> => {
    try {
          const res = await axios.delete(`${API_URL}/${id}`);
  return res.data;

    } catch (error) {
        console.log(error)
        throw error
    }
}

export const classifyTask = async (description: string) => {
    try {
        const res = await axios.post(`${API_URL}/classify`, { description });
        console.log("************response******",res)
        return res.data;
    } catch (error) {
         console.log(error)
    }
}