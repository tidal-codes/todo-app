import { Box, Button, Flex } from "@chakra-ui/react";
import { FunnelSimpleIcon } from "@phosphor-icons/react";
import TaskFilter from "./TaskFilter";
import TaskSearch from "./TaskSearch";
import ProjectMembersView from "./ProjectMembersView";
import NewTaskDialog from "../NewTaskDialog";

const TaskController = () => {
  return (
    <Flex
      width="full"
      alignItems="center"
      justifyContent="space-between"
      py={3}
      px={5}
    >
      <Flex alignItems="center" justifyContent="space-between" gap={2}>
        <TaskFilter>
          <Button variant="subtle">
            <FunnelSimpleIcon />
          </Button>
        </TaskFilter>
        <NewTaskDialog>
          <Button>فعالیت جدید</Button>
        </NewTaskDialog>
      </Flex>
      <ProjectMembersView />
    </Flex>
  );
};

export default TaskController;
