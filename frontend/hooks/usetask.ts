import { createTask, deleteTask, getTasks, updateTask } from "@/api/task";
import { Task } from "@/types/task";
import {  useMutation, useQuery, useQueryClient } from "@tanstack/react-query"


export const useTasks = () => {
    const queryClient = useQueryClient();

    const tasksQuery = useQuery<Task[], Error>({
        queryKey: ["tasks"],
        queryFn:getTasks,
    })
    const addTask = useMutation<Task, Error, Omit<Task, "_id">>({
        mutationFn: createTask,
        onSuccess:()=>queryClient.invalidateQueries({queryKey:["tasks"]})
    })
    const editTask = useMutation<Task, Error, { id: string; data: Partial<Task> }>({
        mutationFn:({id,data})=> updateTask(id,data),
        onSuccess:()=>queryClient.invalidateQueries({queryKey:["tasks"]})
    })
    const removeTask = useMutation<{ message: string }, Error, string>({
        mutationFn: deleteTask,
        onSuccess:()=>queryClient.invalidateQueries({queryKey:["tasks"]})
    })
    return {tasksQuery,addTask,editTask,removeTask}
}