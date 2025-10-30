import { type GroupBy, type Task } from "@/shared/types";
import { groupByOption, sortByOptions } from "../constants/taskViewOptions";
import type { GroupedTasks, SortBy } from "@/shared/types";
// export const sortTasks = (tasks: Task[], sortBy) => { };
export const groupTasks = (tasks: Task[], groupBy: GroupBy) => {
  const result = tasks.reduce(
    groupByOption[groupBy].action,
    groupByOption[groupBy].initial(),
  );
  return result;
};
export const sortTasks = (groupedTasks: GroupedTasks, sortBy: SortBy) => {
  const gTasks = [...groupedTasks];
  for (const item of gTasks) {
    item.tasks.sort(sortByOptions[sortBy].action);
  }
  return gTasks;
};
export const searchTasks = (
  groupedTasks: GroupedTasks,
  searchKeyword: string,
) => {
  return [...groupedTasks].map((item) => {
    const tasks = item.tasks.filter((task) =>
      task.title?.includes(searchKeyword),
    );
    return { ...item, tasks };
  });
  // console.log(item.tasks.filter(task => task.title?.includes(searchKeyword)))
};
