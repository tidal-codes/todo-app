import type { Task } from "@/shared/types";
import { groupTasks, sortTasks } from "../utils/task";
import { useMemo } from "react";
import { useFilter } from "../context/filter";
import { normalizeTasks } from "../utils/normalizeTasks";

export function useProcessedTasks(tasks: Task[]) {
  const { filter } = useFilter();
  const grouped = useMemo(() => {
    if (tasks?.length === 0) return [];
    const groupedTasks = groupTasks(tasks, filter.groupBy);
    return normalizeTasks(groupedTasks, filter.groupBy);
  }, [tasks, filter.groupBy]);
  const groupedAndSorted = useMemo(() => {
    return sortTasks(grouped, filter.sortBy);
  }, [grouped, filter.sortBy]);

  return groupedAndSorted;
}
