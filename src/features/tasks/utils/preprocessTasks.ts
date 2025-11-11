import type { RawTask, Task } from "@/shared/types";
import { getDateString, getDaysDifference, getRelativeDate } from "./date";

export function preprocessTask(task: RawTask): Task {
  if (!task) return task;
  if (!task.due_date) return task;
  try {
    const daysDifference = getDaysDifference(task.due_date);
    const relativeDate =
      daysDifference !== null ? getRelativeDate(daysDifference) : null;
    const dateString = getDateString(task.due_date);
    return { ...task, daysDifference, relativeDate, dateString };
  } catch (e) {
    return task;
  }
}
