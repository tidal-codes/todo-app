import type { Task } from "@/shared/types";
import { Flex, For } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useProcessedTasks } from "../hooks/useProcessedTasks";
import TaskGroup from "./TaskGroup";

const TaskList = () => {
  const { data: tasks = [] as Task[] } = useQuery<Task[]>({
    queryKey: ["tasks"],
    queryFn: async () => [] as Task[],
    enabled: false,
  });
  const groups = useProcessedTasks(tasks);
  console.log(groups);
  return (
    <Flex width="full" gap={2} px={5} my={5} flex={1}>
      <For each={groups}>
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
