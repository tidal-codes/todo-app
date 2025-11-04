import { supabase } from "@/app/supabase/supabase";

export async function supabaseSearchUser(search: string) {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .or(`tag.ilike.%${search}%,email.ilike.%${search}%`);

  if (error) throw error;
  return data || [];
}

export async function supabaseAddUserToProject(
  project_id: string,
  user_id: string,
) {
  const { data, error } = await supabase
    .from("project_members")
    .insert([{ project_id, user_id, role: "member" }])
    .select();
  if (error) throw error;
  return data;
}
