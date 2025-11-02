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
export async function supabaseAddProject(project: Project) {
  const { data, error } = await supabase
    .from("projects")
    .insert([project])
    .select();
  if (error) throw error;
  return data?.[0];
}
