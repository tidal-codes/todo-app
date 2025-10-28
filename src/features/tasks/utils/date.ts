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
export function getRelativeDate(daysDiff: number): string {
  if (daysDiff === 0) return "امروز";
  if (daysDiff === 1) return "فردا";
  if (daysDiff === -1) return "دیروز";

  const absDays = Math.abs(daysDiff);
  const str = daysDiff > 0 ? "روز آینده" : "روز پیش";

  return `${absDays} ${str}`;
}
export function getDateString(jalaliDateString: string): string {
  const date = parse(jalaliDateString, "yyyy-M-d", new Date());
  return format(date, "d MMMM yyyy");
}
