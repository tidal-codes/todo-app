import { getDaysDifference } from "../date";

describe("getDaysDifference", () => {
  const today = new Date();
  const formatDate = (d: Date) =>
    `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

  it("باید فاصله روزها رو برای یک تاریخ گذشته درست برگردونه", () => {
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    const jalaliDateString = formatDate(yesterday);

    const diff = getDaysDifference(jalaliDateString);
    expect(diff).toBe(1);
  });

  it("باید برای امروز 0 برگردونه", () => {
    const jalaliDateString = formatDate(today);
    const diff = getDaysDifference(jalaliDateString);
    expect(diff).toBe(0);
  });

  it("باید برای تاریخ نامعتبر null برگردونه", () => {
    const diff = getDaysDifference("1400-13-50");
    expect(diff).toBeNull();
  });

  it("باید برای رشته‌ای غیر مرتبط null برگردونه", () => {
    const diff = getDaysDifference("abc");
    expect(diff).toBeNull();
  });
});
