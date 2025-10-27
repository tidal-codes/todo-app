import { isValid, parse, differenceInDays } from "date-fns-jalali";

export function getDaysDifference(jalaliDateString: string): number | null {
  try {
    const inputDate = parse(jalaliDateString, "yyyy-M-d", new Date());
    if (isNaN(inputDate.getTime())) {
      return null;
    }
    const today = new Date();
    const diff = differenceInDays(today, inputDate);
    return diff;
  } catch (err) {
    return null;
  }
}
