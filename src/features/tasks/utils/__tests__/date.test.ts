import { getRelativeDate, getDateString } from "../date";

describe("getRelativeDate", () => {
  test('برگردوندن "امروز" برای مقدار صفر', () => {
    expect(getRelativeDate(0)).toBe("امروز");
  });
  test('برگردوندن "فردا" برای مقدار 1', () => {
    expect(getRelativeDate(1)).toBe("فردا");
  });
  test('برگردوندن "دیروز" برای مقدار -1', () => {
    expect(getRelativeDate(-1)).toBe("دیروز");
  });
  test("برگردوندن عبارت درست برای روزهای آینده (مثلاً 3)", () => {
    expect(getRelativeDate(3)).toBe("3 روز آینده");
  });
  test("برگردوندن عبارت درست برای روزهای گذشته (مثلاً -5)", () => {
    expect(getRelativeDate(-5)).toBe("5 روز پیش");
  });
  test("خروجی باید همیشه رشته باشد", () => {
    expect(typeof getRelativeDate(10)).toBe("string");
  });
});

describe("formatJalaliDate", () => {
  test("تبدیل تاریخ ساده بدون صفر به فرمت خوانا", () => {
    expect(getDateString("1404-4-15")).toBe("15 تیر 1404");
  });

  test("تبدیل تاریخ با صفرهای پیش‌فرض به فرمت درست", () => {
    expect(getDateString("1404-04-05")).toBe("5 تیر 1404");
  });

  test("تبدیل تاریخ در ماه فروردین", () => {
    expect(getDateString("1404-1-1")).toBe("1 فروردین 1404");
  });

  test("تبدیل تاریخ در آخرین ماه (اسفند)", () => {
    expect(getDateString("1403-12-29")).toBe("29 اسفند 1403");
  });

  test("بررسی اینکه خروجی همیشه رشته باشد", () => {
    expect(typeof getDateString("1404-5-20")).toBe("string");
  });

  test("بررسی اینکه رشته خروجی شامل نام ماه باشد", () => {
    const result = getDateString("1404-7-10");
    expect(result.includes("مهر")).toBe(true);
  });
});
