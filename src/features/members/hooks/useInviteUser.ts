import { supabaseAddUserToProject } from "@/app/api/usersApi";
import { queryClient } from "@/app/query/queryClient";
import { useMutation } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export function useInviteUser(id: string) {
  const { projectID } = useParams();
  const mutation = useMutation({
    mutationFn: async () => supabaseAddUserToProject(projectID!, id),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["members", projectID] }),
  });
  return mutation;
}
