import { supabase } from "@/app/supabase/supabase";
import type { Task } from "@/shared/types";

export async function supabaseGetTasks() {
  const { data, error } = await supabase
    .from("tasks")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data || [];
}
export async function supabaseAddTask(task: Task) {
  const { data, error } = await supabase.from("tasks").insert([task]).select();

  if (error) throw error;
  return data?.[0];
}

export async function supabaseUpdateTask(id: string, updates: Task) {
  const { data, error } = await supabase
    .from("tasks")
    .update(updates)
    .eq("id", id)
    .select();

  if (error) throw error;
  return data?.[0];
}
export async function supabaseDeleteTask(id: string) {
  const { error } = await supabase.from("tasks").delete().eq("id", id);

  if (error) throw error;
  return true;
}
