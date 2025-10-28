import type { GroupBy, Task } from "@/shared/types";
import { GROUP_TITLE } from "../constants/group";
type groupedTasks = {
  [key: string]: Task[];
};
export function normalizeTasks(groupedTasks: groupedTasks, groupBy: GroupBy) {
  const result = Object.entries(groupedTasks).map(([key, array]) => {
    return {
      groupTitle: GROUP_TITLE[groupBy][key],
      tasks: [...array],
    };
  });
  return result.filter((item) => item.tasks.length !== 0);
}
