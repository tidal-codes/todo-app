import { supabase } from "@/app/supabase/supabase";
import type { NewTaskSupabase } from "@/features/tasks/types/newTask";
import type { Task } from "@/shared/types";

export async function supabaseGetTasks(projectId: string) {
  const { data, error } = await supabase.rpc("get_tasks", {
    p_project_id: projectId,
  });
  if (error) throw error;
  if (!data) return [];
  return data;
}
export async function supabaseAddTask(task: NewTaskSupabase) {
  const { data, error } = await supabase.rpc("add_task_with_assignments2", {
    p_title: task.title,
    p_due_date: task.dueDate,
    p_priority: Number(task.priority),
    p_description: task.description,
    p_assigned_members: task.assignedMembers,
    p_project_id: task.project_id,
  });
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
