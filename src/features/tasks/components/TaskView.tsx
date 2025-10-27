import { Box } from "@chakra-ui/react";
import TaskController from "./TaskController/TaskController";
import { FilterProvider } from "../context/filter";
import TaskList from "./TaskList";
const TaskView = () => {
  return (
    <Box>
      <FilterProvider>
        <TaskController />
        <TaskList />
      </FilterProvider>
    </Box>
  );
};

export default TaskView;
