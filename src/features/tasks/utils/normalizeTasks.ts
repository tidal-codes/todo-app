import type { Task } from "@/shared/types";
import { GROUP_TITLE } from "../constants/group";
type groupedTasks = {
  [key: string]: Task[];
};
export function normalizeTasks(groupedTasks: groupedTasks) {
  return Object.entries(groupedTasks).map(([key, array]) => {
    return {
      groupTitle: GROUP_TITLE[key],
      tasks: [...array],
    };
  });
}
