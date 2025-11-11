import { supabase } from "@/app/supabase/supabase";
import type { User } from "@/shared/types";

interface ProjectMember {
  users: User[];
}

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
  description,
  icon,
  color,
}: {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}) {
  const { data, error } = await supabase
    .rpc("create_project_with_owner", {
      p_project_id: id,
      p_title: title,
      p_description: description,
      p_color: color,
      p_icon: icon,
    })
    .select();
  if (error) throw error;
  return data?.[0];
}
export async function supabaseGetProjectMembers(
  projectId: string,
): Promise<ProjectMember> {
  const { data, error } = await supabase
    .from("project_members")
    .select("users(*)")
    .eq("project_id", projectId);
  if (error) throw error;
  return {
    users: data ? data.map((item) => item.users).flat() : [],
  };
}
