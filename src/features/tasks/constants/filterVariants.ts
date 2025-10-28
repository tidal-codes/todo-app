import { isValid, parse, compareAsc } from "date-fns-jalali";
import { type Task } from "@/shared/types";
import { GROUP_VARIANT } from "./group";
export const sortVariants = {
  DATE: (a: Task, b: Task) => {
    const aDate = a?.due_date
      ? parse(a.due_date, "yyyy-M-d", new Date())
      : null;
    const bDate = b?.due_date
      ? parse(b.due_date, "yyyy-M-d", new Date())
      : null;

    const aOk = aDate && isValid(aDate);
    const bOk = bDate && isValid(bDate);

    if (!aOk && !bOk) return 0;
    if (!aOk) return 1;
    if (!bOk) return -1;

    return compareAsc(aDate, bDate);
  },
  TITLE: (a: Task, b: Task) => b.title.localeCompare(a.title),
  PRIORITY: (a: Task, b: Task) => Number(b.priority) - Number(a.priority),
};
export const groupVariants = {
  DATE: (acc, task: Task) => {
    let key = null;
    const daysDifference = task.daysDifference;
    if (daysDifference == null) {
      key = GROUP_VARIANT.DATE.NONE;
    } else {
      if (daysDifference == -1) key = GROUP_VARIANT.DATE.YESTERDAY;
      if (daysDifference == 0) key = GROUP_VARIANT.DATE.TODAY;
      if (daysDifference == 1) key = GROUP_VARIANT.DATE.TOMORROW;
    }
    if (!key) key = GROUP_VARIANT.DATE.OTHERS;

    acc[key].push(task);
    return acc;
  },
  PRIORITY: (acc, task: Task) => {
    let key = null;
    const priority = task.priority;
    switch (priority.toString()) {
      case "0":
        key = GROUP_VARIANT.PRIORITY.NONE;
        break;
      case "1":
        key = GROUP_VARIANT.PRIORITY.LOW;
        break;
      case "2":
        key = GROUP_VARIANT.PRIORITY.MEDIUM;
        break;
      case "3":
        key = GROUP_VARIANT.PRIORITY.HIGH;
        break;
      default:
        throw new Error("priority is not defined");
    }
    acc[key].push(task);
    return acc;
  },
};
