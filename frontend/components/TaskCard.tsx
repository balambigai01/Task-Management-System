import { Task} from "@/types/task";
import { Pencil, Trash2 } from "lucide-react";

type TaskCardProps = {
  task: Task;
  onEdit: () => void;
  onDelete: () => void;
};

const priorityStyles = {
  high: "bg-pink-100 text-pink-700 border border-pink-300",
  medium: "bg-yellow-100 text-yellow-700 border border-yellow-300",
  low: "bg-green-100 text-green-700 border border-green-300",
};

const bgColor={
  high: "bg-pink-100/40 ",
  medium: "bg-yellow-100/40 ",
  low: "bg-green-100/40 "
}

const StatusBadge = ({ status }:{ status: Task["status"] }) => {
  const statusStyles = {
  todo: "text-red-600",
  progress: "text-blue-600",
  done: "text-green-600",
};
  return (
   <span className={`flex items-center gap-1 text-sm font-medium ${statusStyles[status]}`}>
  <span className="w-2 h-2 rounded-full bg-current"></span>
  {status}
</span>  )
}
const TaskCard = ({ task, onEdit, onDelete }: TaskCardProps) => {
  return (
    <div className={`rounded-xl border border-gray-200 ${bgColor[task.priority]} p-5 shadow-sm hover:shadow-md transition-all min-h-[200px] flex flex-col justify-between`}>
      <div className="flex justify-between">
      <div className="flex gap-2">
       
      <span
        className={`px-3 py-2 rounded-full text-xs font-medium w-fit ${priorityStyles[task.priority]}`}
      >
        {task.priority} priority
      </span>
       <StatusBadge status={task.status}/></div>
       </div>
      {/* Title & Description */}
      <div className="mt-3">
        <h3 className="font-semibold text-gray-800 text-lg">{task.title}</h3>
        <p className="text-gray-500 text-sm mt-1">{task.description}</p>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mt-5">
        <button
          onClick={onEdit}
          className="p-2 hover:bg-blue-50 rounded-lg transition"
        >
          <Pencil className="text-blue-600" size={18} />
        </button>

        <button
          onClick={onDelete}
          className="p-2 hover:bg-red-50 rounded-lg transition"
        >
          <Trash2 className="text-red-500" size={18} />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
