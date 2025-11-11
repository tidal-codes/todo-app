import { useAssignedMembers } from "@/features/members/hooks/useAssignedMembers";
import Members from "@/shared/components/Members";
import { Flex } from "@chakra-ui/react";

const Footer = ({ task_assignments }: { task_assignments: string[] }) => {
  const { assignedMembers, isLoading } = useAssignedMembers(task_assignments);
  return (
    <Flex gap={2} justifyContent="space-between">
      {!isLoading && (
        <Members
          showAddIcon={false}
          avatars={assignedMembers}
          size="xs"
          limit={5}
        />
      )}
    </Flex>
  );
};

export default Footer;
