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
    mutationFn: async (title: string) => {
      const newProject = { id: `project-${nanoid(8)}`, title };
      const data = await supabaseAddProject(newProject);
      return data;
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["projects"], (old: any = []) => [...old, data]);
    },
  });

  //   // Update project (مثال)
  //   const updateMutation = useMutation({
  //     mutationFn: async (updatedProject: Project) => {
  //       const res = await supabaseUpdateProject(updatedProject);
  //       return res;
  //     },
  //     onSuccess: (data) => {
  //       queryClient.setQueryData(["projects"], (old: Project[] = []) =>
  //         old.map((p) => (p.id === data.id ? data : p))
  //       );
  //     },
  //   });

  //   // Delete project
  //   const deleteMutation = useMutation({
  //     mutationFn: async (id: string) => {
  //       await supabaseDeleteProject(id);
  //       return id;
  //     },
  //     onSuccess: (id) => {
  //       queryClient.setQueryData(["projects"], (old: Project[] = []) =>
  //         old.filter((p) => p.id !== id)
  //       );
  //     },
  //   });

  return {
    projects,
    addProject: addMutation.mutateAsync,
    // updateProject: updateMutation.mutateAsync,
    // deleteProject: deleteMutation.mutateAsync,
    isAdding: addMutation.isPending,
    // isUpdating: updateMutation.isPending,
    // isDeleting: deleteMutation.isPending,
  };
}
