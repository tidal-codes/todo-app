import type { Project } from "@/shared/types";
import { db } from "./indexedDB";

async function dbGetAllProjects(): Promise<Project[]> {
  return await db.projects.toArray();
}

async function dbAddProject(project: Project): Promise<void> {
  await db.projects.add(project);
}

async function dbUpdateProject(
  id: string,
  newProject: Partial<Project>,
): Promise<void> {
  await db.projects.update(id, newProject);
}

async function dbDeleteProject(id: string): Promise<void> {
  await db.tasks.where("projectId").equals(id).delete();
  await db.projects.delete(id);
}
async function dbResetProjcets(projects: Project[]): Promise<void> {
  await db.transaction("rw", db.projects, async () => {
    await db.projects.clear();
    await db.projects.bulkAdd(projects);
  });
}

export {
  dbGetAllProjects,
  dbAddProject,
  dbUpdateProject,
  dbDeleteProject,
  dbResetProjcets,
};
