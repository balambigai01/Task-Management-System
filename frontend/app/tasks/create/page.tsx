"use client";

import TaskForm from "../../../components/TaskForm";
import { useRouter } from "next/navigation";
import { useTasks } from "@/hooks/usetask";
import { classifyTask as classifyAPI } from "@/api/task";
import { Task } from "@/types/task";

export default function CreateTaskPage() {
  const { addTask } = useTasks();
  const router = useRouter();

  const handleSubmit = async (data: Task) => {
    await addTask.mutateAsync(data);
    router.push("/dashboard");
  };
  const handleCancel = () => router.push("/dashboard");

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-black">Create Task</h1>
      <TaskForm onSubmit={handleSubmit} classifyTask={classifyAPI} onCancel={handleCancel} />
    </div>
  ); 
}
