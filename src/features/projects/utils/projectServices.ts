import { dbAddProject } from "@/features/projects/db/projects";
import { queryClient } from "@/app/query/queryClient";
import type { Project } from "@/shared/types";

export async function addProject(id: string, title: string) {
  const projects = queryClient.getQueryData(["projects"]) as Project[];
  queryClient.setQueryData(["projects"], () => {
    return [...projects, { id, title, created_at: Date.now() }];
  });
  try {
    await dbAddProject({
      id,
      title,
      dirty: 1,
      created_at: Date.now().toString(),
    });
  } catch (err) {
    throw new Error("error");
  }
}
