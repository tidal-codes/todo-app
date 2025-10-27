import type { Task } from "@/shared/types";
type ProcessedTasks = {
  groupTitle: string;
  tasks: Task[];
};
const g = [{ title: "todo" }, { title: "doing" }, { title: "thinking" }];
export function useProcessedTasks(tasks: Task[]) {
  return tasks.reduce(
    (acc, task) => {
      acc[Math.floor(Math.random() * 3)].tasks.push(task);
      return acc;
    },
    g.map((i) => ({ groupTitle: i.title, tasks: [] })),
  );
}
