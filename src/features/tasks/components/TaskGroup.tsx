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
  if (tasks.length === 0) return null;
  return (
    <Box minWidth={220} maxWidth={350} bg="Background">
      <Box width="full" bg="background" px={2} py={1}>
        <p>{groupTitle}</p>
      </Box>

      <For each={tasks}>
        {(item) => {
          return <Task key={item.id} title={item.title} />;
        }}
      </For>
    </Box>
  );
};

export default TaskGroup;
