import { Members } from "@/shared/components/Members";
import { Box, Button, Flex } from "@chakra-ui/react";
import AssignMembersPopover from "../assignMembersPopover";
import { UseNewTaskContext } from "../../context/NewTaskProvider";
import { useMembers } from "@/features/members/hooks/useMembers";
import { useTasks } from "../../hooks/useTasks";
import type React from "react";

interface Props {
  setOpen: React.SetStateAction<boolean>;
}

const Footer = ({ setOpen }: Props) => {
  const { form } = UseNewTaskContext();
  const { addTask, isAdding } = useTasks();
  const { members } = useMembers();
  const assignedMembers = members?.users.filter((user) =>
    form.assignedMembers.includes(user.id),
  );

  return (
    <Box p={2} borderTop="1px solid" borderColor="gray.200">
      <Flex alignItems="center" justifyContent="space-between" gap={2}>
        <Box>
          <Button
            onClick={() => addTask(form)}
            disabled={Boolean(!form.title.trim())}
            loading={isAdding}
          >
            ثبت فعالیت
          </Button>
        </Box>
        <Box>
          <AssignMembersPopover onAssign={() => {}}>
            <Members avatars={assignedMembers} size="xs" />
          </AssignMembersPopover>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
