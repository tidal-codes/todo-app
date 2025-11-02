import { dbResetTasks, dbGetAllTasks } from "@/features/tasks/db/tasks";
import { queryClient } from "@/app/query/queryClient";
import { supabaseGetTasks } from "@/app/api/taskApi";
import { supabaseGetProjects, supabaseAddProject } from "@/app/api/projectApi";
import { preprocessTask } from "@/features/tasks/utils/preprocessTasks";
import {
  dbGetAllProjects,
  dbGetDirtyProjects,
  dbResetProjcets,
  dbUpdateProject,
} from "@/features/projects/db/projects";
import { useSyncStore } from "@/app/store/syncStatus";
export async function initSync() {
  const localProjcets = await dbGetAllProjects();
  const localTasks = await dbGetAllTasks();

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

export async function syncProjects() {
  const { setLoading, setError } = useSyncStore.getState();
  const dirtyProjects = await dbGetDirtyProjects();
  if (!dirtyProjects || dirtyProjects.length === 0) return;
  setLoading(true);
  setError(null);
  try {
    for (const project of dirtyProjects) {
      await supabaseAddProject({
        id: project.id,
        title: project.title,
        created_at: project.created_at,
      });
      console.log("project added");
      await dbUpdateProject(project.id, {
        ...project,
        dirty: 0,
      });
    }
    queryClient.invalidateQueries({ queryKey: ["projects"] });
  } catch (err) {
    console.error("خطا در سینک پروژه‌ها:", err);
    setError("خطا در سینک پروژه‌ها:");
    throw err;
  } finally {
    setLoading(false);
  }
}
