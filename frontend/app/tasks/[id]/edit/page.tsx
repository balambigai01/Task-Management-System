"use client";

import { getTaskById , classifyTask as classifyAPI } from "@/api/task";
import TaskForm from "@/components/TaskForm";
import { useTasks } from "@/hooks/usetask";
import { Task } from "@/types/task";

import { useParams, useRouter} from "next/navigation";
import { useEffect, useState } from "react";

export default function EditTaskPage() {
  const router = useRouter();
    
    const params = useParams();
     const id: string = Array.isArray(params.id) ? params.id[0] : params.id || "";
  const { editTask } = useTasks();
    const [taskData, setTaskData] = useState<Task | null>(null);

    console.log("params", id)
    

  useEffect(() => {
    const fetchTask = async () => {
      const task = await getTaskById(id);
      setTaskData(task);
    };
    fetchTask();
  }, [id]);

  const handleSubmit = async (data: Task) => {
    await editTask.mutateAsync({ id: id, data });
    router.push("/dashboard");
  };

  if (!taskData) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-black">Edit Task</h1>
      <TaskForm onSubmit={handleSubmit} initialData={taskData} classifyTask={classifyAPI} />
    </div>
  );
}
