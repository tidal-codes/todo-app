import { supabaseAddTask, supabaseGetTasks } from "@/app/api/taskApi";
import { queryClient } from "@/app/query/queryClient";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { preprocessTask } from "../utils/preprocessTasks";
import type { NewTaskForm } from "../types/newTask";
import { useMembers } from "@/features/members/hooks/useMembers";

export function useTasks() {
  const { projectID } = useParams();
  const { members } = useMembers();
  const { data: tasks, isLoading: tasksLoading } = useQuery({
    queryKey: ["tasks", projectID],
    queryFn: async () => {
      const data = await supabaseGetTasks(projectID!);
      return data.map((task) => preprocessTask(task));
    },
  });

  const addMutation = useMutation({
    mutationFn: async (taskData: NewTaskForm) => {
      return await supabaseAddTask({ ...taskData, project_id: projectID! });
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["tasks", projectID], (old: any = []) => [
        ...old,
        preprocessTask(data),
      ]);
    },
  });

  const getAssignedMembers = () => {
    if (!members || !tasks) return [];
    return tasks.map((task) =>
      task.task_assignments.map((id) => members.users.find((m) => m.id === id)),
    );
  };

  return {
    tasks,
    tasksLoading,
    addTask: addMutation.mutate,
    isAdding: addMutation.isPending,
    getAssignedMembers,
  };
}
