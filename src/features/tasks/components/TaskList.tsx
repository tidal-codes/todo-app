import type { Task } from "@/shared/types";
import { Flex, For, Spinner } from "@chakra-ui/react";
import { useProcessedTasks } from "../hooks/useProcessedTasks";
import TaskGroup from "./TaskGroup";
import { useTasks } from "../hooks/useTasks";

const TaskList = () => {
  const { tasks } = useTasks();
  const groups = useProcessedTasks(tasks ? tasks : ([] as Task[]));

  return (
    <Flex width="full" gap={2} px={5} my={5} flex={1}>
      <For each={groups} fallback={<Spinner />}>
        {(group, index) => {
          if (group.tasks.length == 0) return null;
          return (
            <TaskGroup
              key={index}
              groupTitle={group.groupTitle}
              tasks={group.tasks}
            />
          );
        }}
      </For>
    </Flex>
  );
};

export default TaskList;
