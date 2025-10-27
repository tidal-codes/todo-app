import { format, parse, differenceInCalendarDays } from "date-fns-jalali";

export function getDaysDifference(dateString) {
    const inputDate = parse(dateString, "yyyy-MM-dd", new Date());
    const now = new Date();
    const todayJalali = parse(format(now, "yyyy-MM-dd"), "yyyy-MM-dd", new Date());
    const diff = differenceInCalendarDays(inputDate, todayJalali);
    return diff
}

console.log(getDaysDifference('1404-8-4'))