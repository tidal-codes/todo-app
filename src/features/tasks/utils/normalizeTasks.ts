import type { GroupBy, Task } from "@/shared/types";
import { GROUP_TITLE } from "../constants/group";
type groupedTasks = {
  [key: string]: Task[];
};
export function normalizeTasks(groupedTasks: groupedTasks, groupBy: GroupBy) {
  return Object.entries(groupedTasks).map(([key, array]) => {
    return {
      groupTitle: GROUP_TITLE[groupBy][key],
      tasks: [...array],
    };
  });
}
