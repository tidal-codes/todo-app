import { type GroupBy, type Task } from "@/shared/types";
import { groupByOption } from "../constants/groupByOptions";
// export const sortTasks = (tasks: Task[], sortBy) => { };
export const groupTasks = (tasks: Task[], groupBy: GroupBy) => {
  const result = tasks.reduce(
    groupByOption[groupBy].action,
    groupByOption[groupBy].initial(),
  );
  return result;
};
