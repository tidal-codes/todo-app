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
  relativeDate?: string | null;
  dateString?: string | null;
  priorityLable?: string;
};
export type GroupedTasks = {
  groupTitle: string;
  tasks: Task[];
}[];
export type Project = {
  id: string;
  title: string;
  owner_id: string;
  created_at: string;
};
export type User = {
  id: string;
  tag: string;
  first_name: string | null;
  last_name: string | null;
  email?: string;
  created_at?: string;
  profile_url: string | null;
};
export type SortBy = "DATE" | "TITLE" | "PRIORITY";
export type GroupBy = "DATE" | "PRIORITY";
