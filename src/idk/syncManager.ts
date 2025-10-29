import { dbResetTasks, dbGetAllTasks } from "@/app/db/indexedDB";
import { queryClient } from "./query";
import { supabaseGetTasks } from "@/features/api/tasksService";
import { preprocessTask } from "@/features/tasks/utils/preprocessTasks";
export async function initSync() {
  const localTasks = await dbGetAllTasks();
  console.log("localTasks", localTasks);
  if (localTasks.length) {
    queryClient.setQueryData(
      ["tasks"],
      localTasks.map((task) => preprocessTask(task)),
    );
  }
  try {
    const data = await queryClient.fetchQuery({
      queryKey: ["tasks"],
      queryFn: async () => {
        const tasks = await supabaseGetTasks();
        await dbResetTasks(tasks);
        return tasks.map((task) => preprocessTask(task));
      },
    });
    queryClient.setQueryData(["tasks"], data);
  } catch (err) {
    // network error: keep localTasks, we'll sync later
    console.warn("prefetch supabase failed, offline or server down", err);
  }
}
