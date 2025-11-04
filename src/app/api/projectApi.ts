import { supabase } from "@/app/supabase/supabase";
import type { Project } from "@/shared/types";

export async function supabaseGetProjects() {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw error;
  return data || [];
}
export async function supabaseAddProject({
  id,
  title,
}: {
  id: string;
  title: string;
}) {
  const { data, error } = await supabase
    .from("projects")
    .insert([{ id, title }])
    .select();
  if (error) throw error;
  return data?.[0];
}
export async function supabaseGetProjectMembers(projectId: string) {
  const { data, error } = await supabase
    .from("project_members")
    .select("user_id, users(*)")
    .eq("project_id", projectId);
  if (error) throw error;
  return data;
}
