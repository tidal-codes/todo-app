import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://aygcrxwwhambtndmoaql.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF5Z2NyeHd3aGFtYnRuZG1vYXFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg0NTY0NTYsImV4cCI6MjA3NDAzMjQ1Nn0.wt1iJJc0KSFnTz5v5k7UO8z6xu5J8_NIOaa2TJAJ2xU";
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function supabaseGetTasks() {
  const { data, error } = await supabase
    .from("tasks")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data || [];
}
export async function supabaseGetProjects() {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw error;
  return data || [];
}
// export async function supabaseAddTask(task) {
//   const { data, error } = await supabase
//     .from("tasks")
//     .insert([task])
//     .select();

//   if (error) throw error;
//   return data?.[0];
// }
// export async function supabaseUpdateTask(id, updates) {
//   const { data, error } = await supabase
//     .from("tasks")
//     .update(updates)
//     .eq("id", id)
//     .select();

//   if (error) throw error;
//   return data?.[0];
// }
// export async function supabaseDeleteTask(id) {
//   const { error } = await supabase
//     .from("tasks")
//     .delete()
//     .eq("id", id);

//   if (error) throw error;
//   return true;
// }
