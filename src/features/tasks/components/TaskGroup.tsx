import { Box, For } from "@chakra-ui/react";
import type { Task as TypeTask } from "@/shared/types";
import Task from "./Task";

const TaskGroup = ({
  groupTitle,
  tasks,
}: {
  groupTitle: string;
  tasks: TypeTask[];
}) => {
  return (
    <Box minWidth={220} maxWidth={350} bg="Background">
      <Box width="full" bg="background" px={2} py={1}>
        <p>{groupTitle}</p>
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
