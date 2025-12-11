import { TaskInput } from "@/types/task";
import { FormEvent, useState } from "react";

type TaskFormProps = {
  initialData?: Partial<TaskInput>;
  onSubmit: (data: TaskInput) => void;
  onCancel?: () => void;
  classifyTask?: (description: string) => Promise<{ priority: TaskInput["priority"]; status: TaskInput["status"] }>;
};

const TaskForm = ({ onSubmit, initialData = {}, classifyTask,onCancel }: TaskFormProps) => {
  const [title, setTitle] = useState(initialData.title || "");
  const [description, setDescription] = useState(initialData.description || "");
  const [priority, setPriority] = useState<TaskInput["priority"]>(initialData.priority || "low");
  const [status, setStatus] = useState<TaskInput["status"]>(initialData.status || "todo");

  const handleClassify = async () => {
    if (classifyTask) {
      const res = await classifyTask(description);
      console.log("response",res)
      setPriority(res.priority);
      setStatus(res.status);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ title, description, priority, status });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 max-w-3xl mx-auto">
      <input
        type="text"
        placeholder="Title"
        className="border border-gray-200 p-2 w-full text-black"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        className="border border-gray-200 p-2 w-full text-black"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <div className="flex gap-2 text-black">
        <select value={priority} onChange={(e) => setPriority(e.target.value as TaskInput["priority"])}>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <select value={status} onChange={(e) => setStatus(e.target.value as TaskInput["status"])}>
          <option value="todo">Todo</option>
          <option value="progress">Progress</option>
          <option value="done">Done</option>
        </select>
        <button type="button" onClick={handleClassify} className="text-[#0a6de7] bg-[#e2ebfa]  px-3 py-1 rounded">
          Auto-Categorize
        </button>
      </div>
      <div className="flex gap-2">
      <button type="submit" className="bg-green-300 text-green-600 px-3 py-1 rounded">
        Submit
      </button>
      <button type="submit"  onClick={onCancel} className="bg-gray-300 text-gray-600 px-3 py-1 rounded">
        Cancel
      </button></div>
    </form>
  );
};

export default TaskForm;
