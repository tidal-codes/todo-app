import { supabaseGetProjectMembers } from "@/app/api/projectApi";
import type { User } from "@/shared/types";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export function useMembers() {
  const { projectID } = useParams();
  const { data: members, isLoading } = useQuery<
    { user_id: string; users: User }[]
  >({
    queryKey: ["members", projectID],
    queryFn: async () => supabaseGetProjectMembers(projectID!),
  });
  return { members, isLoading };
}
