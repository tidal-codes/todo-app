import type { GroupBy, Task } from "@/shared/types";
import { GROUP_TITLE } from "../constants/group";

export function normalizeTasks(
  groupedTasks: { [key: string]: Task[] },
  groupBy: GroupBy,
) {
  const result = Object.entries(groupedTasks).map(([key, array]) => {
    return {
      groupTitle:
        GROUP_TITLE[groupBy][key as keyof (typeof GROUP_TITLE)[GroupBy]],
      tasks: [...(array as Task[])],
    };
  });
  return result.filter((item: { tasks: Task[] }) => item.tasks.length !== 0);
}
