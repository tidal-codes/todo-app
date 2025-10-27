import { Box, For } from "@chakra-ui/react";
import Task from "./Task";

type task = { id: string; title: string };
const TaskGroup = ({
  groupTitle,
  tasks,
}: {
  groupTitle: string;
  tasks: task[];
}) => {
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
