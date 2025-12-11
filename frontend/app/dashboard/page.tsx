"use client";

import { useTasks } from "@/hooks/usetask";
import TaskCard from "../../components/TaskCard";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import { useState } from "react";
import { Task } from "@/types/task";

export default function DashboardPage() {
  const { tasksQuery, removeTask } = useTasks();
  const router = useRouter();
  const [filter,setFilter] = useState("All")

  if (tasksQuery.isLoading) return <p>Loading...</p>;
  if (tasksQuery.isError) return <p>Error loading tasks</p>;

  const filteredTask = tasksQuery.data?.filter((task: Task)=> {
    if (filter === "All") return true;
    return task.status === filter
  })

  return (
    <div className="p-6  ">
      <div className="flex justify-between">
      <h1 className="text-2xl font-bold mb-4 text-black">Tasks Dashboard</h1>

      <button
        onClick={() => router.push("/tasks/create")}
        className="text-[#0a6de7] bg-[#e2ebfa] px-3 py-1  mb-4 flex gap-1 rounded-lg"
        >
          <Plus height={20}/>
        New Task
        </button>
      </div>
     <div className="flex gap-4  my-4">
     {["All", "todo", "progress", "done"].map((item) => {
       const count =
       item === "All"
        ? tasksQuery && tasksQuery.data?.length
        : tasksQuery.data?.filter((t: Task) => t.status === item).length;

       const active = filter === item;

      return (
      <button
        key={item}
        onClick={() => setFilter(item)}
        className={`px-4 py-1.5 rounded-full flex items-center gap-2 
          text-sm font-medium transition 
          ${active ? "bg-blue-100 text-blue-700" : "text-gray-500 hover:bg-gray-100"}
        `}
      >
        <span>{item}</span>
        <span
          className={`text-xs px-2 py-0.5 rounded-full 
            ${active ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-700"}
          `}
        >
          {count}
        </span>
      </button>
    );
  })}
</div>

    <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4">
      { filteredTask && filteredTask.map((task: Task) => {
        return ( 
            <div  key={task._id} >
            <TaskCard
              task={task}
              onEdit={() => router.push(`/tasks/${task._id}/edit`)}
              onDelete={() => task._id && removeTask.mutate(task._id)}
              />
               </div>
        )
      })}
        </div>
    </div>
  );
}
