import type { Task } from "@/shared/types";
import { queryClient } from "@/app/query/queryClient";
export const setTaskComplete = (id: string) => {
  const data = queryClient.getQueryData(["tasks"]) as Task[] | undefined;
  if (!data) return;
  const result = data.map((task) =>
    task.id == id ? { ...task, is_completed: !task.is_completed } : task,
  );
  queryClient.setQueryData(["tasks"], result);
};
