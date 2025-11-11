import { supabaseGetProjectMembers } from "@/app/api/projectApi";
import type { User } from "@/shared/types";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export function useMembers() {
  const { projectID } = useParams();
  const { data: members, isLoading } = useQuery<{ users: User[] }>({
    queryKey: ["members", projectID],
    queryFn: async () => supabaseGetProjectMembers(projectID!),
  });

  const addMember = (id) => {};

  return { members, isLoading };
}
