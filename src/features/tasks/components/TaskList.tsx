import { supabaseGetTasks } from "@/features/api/tasksService";
import type { Task } from "@/shared/types";
import { Flex, For } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useProcessedTasks } from "../hooks/useProcessedTasks";
import { preprocessTask } from "../utils/preprocessTasks";
import TaskGroup from "./TaskGroup";

const TaskList = () => {
  const { data } = useQuery<Task[]>({
    queryKey: ["tasks"],
    queryFn: async () => {
      const tasks = await supabaseGetTasks();
      return tasks.map((task) => preprocessTask(task));
    },
  });

  const groups = useProcessedTasks(data ?? []);
  console.log(groups);
  return (
    <Flex width="full" gap={2} px={5} my={5} overflow-x="scroll" flex={1}>
      <For each={groups} fallback={"none"}>
        {(item) => {
          return <TaskGroup key={item.groupTitle} {...item} />;
        }}
      </For>
    </Flex>
  );
};

export default TaskList;
