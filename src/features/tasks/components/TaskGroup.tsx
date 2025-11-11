import { Box, For, Text } from "@chakra-ui/react";
import type { Task as TypeTask } from "@/shared/types";
import Task from "./Task";

interface TaskGroupProps {
  groupTitle: string;
  tasks: TypeTask[];
}

const TaskGroup = ({ groupTitle, tasks }: TaskGroupProps) => {
  return (
    <Box width="250px" bg="Background">
      <Box width="full" bg="background" px={2} py={1}>
        <Text>{groupTitle}</Text>
      </Box>

      <For each={tasks}>
        {(task) => {
          return <Task key={task.id} {...task} />;
        }}
      </For>
    </Box>
  );
};

export default TaskGroup;
