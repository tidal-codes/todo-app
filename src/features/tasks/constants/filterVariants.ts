import { isValid, parse, compareAsc } from "date-fns-jalali";
import { type Task } from "@/shared/types";
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
export const groupVariants = {};
