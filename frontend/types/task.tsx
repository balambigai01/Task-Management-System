export type Task = {
  _id?: string;
  title: string;
  description: string;
  priority: "high" | "medium" | "low";
  status: "todo" | "progress" | "done";
};


export type TaskInput = {
  title: string;
  description: string;
  priority: "high" | "medium" | "low";
  status: "todo" | "progress" | "done";
};
