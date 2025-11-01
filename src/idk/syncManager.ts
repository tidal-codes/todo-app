import { dbResetTasks, dbGetAllTasks } from "@/app/db/tasks";
import { queryClient } from "./query";
import {
  supabaseGetTasks,
  supabaseGetProjects,
} from "@/features/api/tasksService";
import { preprocessTask } from "@/features/tasks/utils/preprocessTasks";
import { dbGetAllProjects, dbResetProjcets } from "@/app/db/projects";
export async function initSync() {
  const localProjcets = await dbGetAllProjects();
  const localTasks = await dbGetAllTasks();

  console.log("localProjcets", localProjcets);
  if (localProjcets.length) {
    queryClient.setQueryData(["projects"], localProjcets);
  }
  if (localTasks.length) {
    queryClient.setQueryData(
      ["tasks"],
      localTasks.map((task) => preprocessTask(task)),
    );
  }

  try {
    const projects = await queryClient.fetchQuery({
      queryKey: ["projects"],
      queryFn: supabaseGetProjects,
    });
    await dbResetProjcets(projects);
    queryClient.setQueryData(["projects"], projects);
  } catch (err) {
    console.warn("prefetch supabase failed, offline or server down", err);
  }

  try {
    const tasks = await queryClient.fetchQuery({
      queryKey: ["tasks"],
      queryFn: async () => {
        const tasks = await supabaseGetTasks();
        await dbResetTasks(tasks);
        return tasks.map((task) => preprocessTask(task));
      },
    });
    queryClient.setQueryData(["tasks"], tasks);
  } catch (err) {
    // network error: keep localTasks, we'll sync later
    console.warn("prefetch supabase failed, offline or server down", err);
  }
}
