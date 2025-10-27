import { format, parse, differenceInCalendarDays } from "date-fns-jalali";

export function getDaysDifference(jalaliDateString: string): number | null {
  try {
    const inputDate = parse(jalaliDateString, "yyyy-MM-dd", new Date());
    const now = new Date();
    const todayJalali = parse(
      format(now, "yyyy-MM-dd"),
      "yyyy-MM-dd",
      new Date(),
    );
    const diff = differenceInCalendarDays(inputDate, todayJalali);
    return diff;
  } catch (err) {
    return null;
  }
}
