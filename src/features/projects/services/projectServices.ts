import { queryClient } from "@/app/query/queryClient";
import type { Project } from "@/shared/types";
import { supabaseAddProject } from "@/app/api/projectApi";
import { nanoid } from "nanoid";

export async function addProject(title: string) {
  const newProject = { id: `project-${nanoid(8)}`, title };
  const data: Project = await supabaseAddProject(newProject);
  queryClient.setQueryData(["projects"], (old: Project[]) => [...old, data]);
  return data.id;
}
