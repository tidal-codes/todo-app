export type Priority = "0" | "1" | "2" | "3";
export type RawTask = {
  id: string;
  user_id: string;
  title: string | null;
  is_completed: boolean;
  created_at: string;
  due_date: string | null;
  priority: Priority;
};
export type Task = RawTask & {
  daysDifference?: number | null;
};
export type SortBy = "DATE" | "TITLE" | "PRIORITY";
export type GroupBy = "DATE" | "TITLE" | "PRIORITY";
