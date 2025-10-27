import type { RawTask, Task } from "@/shared/types";
import { getDaysDifference } from "./date";
export function preprocessTask(task: RawTask): Task {
  if (!task) return task;
  if (!task.due_date) return task;
  try {
    const daysDifference = getDaysDifference(task.due_date);
    return { ...task, daysDifference };
  } catch (e) {
    return task;
  }
}
