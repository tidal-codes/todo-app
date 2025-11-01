import { Box, Button, Input } from "@chakra-ui/react";
import { FunnelSimpleIcon } from "@phosphor-icons/react";
import TaskFilter from "./TaskFilter";
import TaskDialog from "@/shared/ui/TaskDialog";
import TaskSearch from "./TaskSearch";

const TaskController = () => {
  return (
    <Box
      width="full"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      py={3}
      px={5}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        gap={2}
      >
        <TaskFilter>
          <Button variant="subtle">
            <FunnelSimpleIcon />
          </Button>
        </TaskFilter>
        <TaskSearch />
      </Box>
    </Box>
  );
};

export default TaskController;
