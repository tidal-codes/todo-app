import { Box, For, Flex } from "@chakra-ui/react";
import TaskGroup from "./TaskGroup";
import TaskController from "./TaskController/TaskController";
import { FilterProvider } from "../context/filter";
import { useQuery } from "@tanstack/react-query";
import { supabaseGetTasks } from "@/features/api/tasksService";
import type { Task } from "@/shared/types";
import { preprocessTask } from "../utils/preprocessTasks";
import { useProcessedTasks } from "../hooks/useProcessedTasks";
const TaskView = () => {
  const { data } = useQuery<Task[]>({
    queryKey: ["tasks"],
    queryFn: async () => {
      const tasks = await supabaseGetTasks();
      const processedTasks: Task[] = tasks.map((task) => preprocessTask(task));
      return processedTasks;
    },
  });

  const groups = data && useProcessedTasks(data);

  return (
    <Box>
      <FilterProvider>
        <TaskController />
        <Flex width="full" gap={2} px={5} my={5} overflow-x="scroll" flex={1}>
          <For each={groups} fallback={"none"}>
            {(item) => {
              return <TaskGroup key={item.groupTitle} {...item} />;
            }}
          </For>
        </Flex>
      </FilterProvider>
    </Box>
  );
};

export default TaskView;
