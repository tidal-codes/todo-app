import { supabaseAddProject } from "@/app/api/projectApi";
import { queryClient } from "@/app/query/queryClient";
import type { Project } from "@/shared/types";
import { useMutation, useQuery } from "@tanstack/react-query";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

export function useProjects() {
  const { data: projects = [] } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      return [] as Project[];
    },
    enabled: false,
  });

  const addMutation = useMutation({
    mutationFn: async ({
      title,
      description,
      icon,
      color,
    }: {
      title: string;
      description: string;
      icon: string;
      color: string;
    }) => {
      const newProject = {
        id: `project-${nanoid(8)}`,
        title,
        description,
        icon,
        color,
      };
      const data = await supabaseAddProject(newProject);
      return data;
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["projects"], (old: any = []) => [...old, data]);
    },
  });

  const getProject = (projectId: string) => {
    return projects.find((project) => project.id === projectId) || null;
  };

  return {
    projects,
    addProject: addMutation.mutateAsync,
    isAdding: addMutation.isPending,
    getProject,
  };
}
