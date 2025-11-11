import { useMembers } from "./useMembers";

export function useAssignedMembers(members_id: string[]) {
  const { members, isLoading } = useMembers();
  let assignedMembers;
  if (!isLoading) {
    assignedMembers = members_id.map((id) =>
      members?.users.find((member) => member.id === id),
    );
  }
  return { assignedMembers, isLoading };
}
