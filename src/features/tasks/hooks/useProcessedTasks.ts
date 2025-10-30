import type { Task } from "@/shared/types";
import { groupTasks, sortTasks, searchTasks } from "../utils/task";
import { useMemo } from "react";
import { useFilter } from "../context/filter";
import { normalizeTasks } from "../utils/normalizeTasks";

export type GroupedTasks = {
  groupTitle: string;
  tasks: Task[];
}[];

export function useProcessedTasks(tasks: Task[]): GroupedTasks {
  const { filter, searchKeyword } = useFilter();

  const grouped = useMemo(() => {
    if (tasks.length === 0) return [];
    const groupedTasks = groupTasks(tasks, filter.groupBy);
    return normalizeTasks(groupedTasks, filter.groupBy);
  }, [tasks, filter.groupBy]);

  const groupedAndSorted = useMemo(() => {
    return sortTasks(grouped, filter.sortBy);
  }, [grouped, filter.sortBy]);

  const filterBySearchkey = useMemo(() => {
    if (!searchKeyword.trim()) return groupedAndSorted;
    return searchTasks(groupedAndSorted, searchKeyword);
  }, [groupedAndSorted, searchKeyword]);

  return filterBySearchkey;
}
