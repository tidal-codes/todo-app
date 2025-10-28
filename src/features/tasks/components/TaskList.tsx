import { supabaseGetTasks } from "@/features/api/tasksService";
import type { Task } from "@/shared/types";
import { Flex, For } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useProcessedTasks } from "../hooks/useProcessedTasks";
import { preprocessTask } from "../utils/preprocessTasks";
import TaskGroup from "./TaskGroup";
import { useEffect } from "react";

const TaskList = () => {
  const { data } = useQuery<Task[]>({
    queryKey: ["tasks"],
    queryFn: async () => {
      const tasks = await supabaseGetTasks();
      return tasks.map((task) => preprocessTask(task));
    },
  });
  const groups = useProcessedTasks(data ?? []);

  return (
    <Flex width="full" gap={2} px={5} my={5} overflow-x="scroll" flex={1}>
      <For each={groups}>
        {(group, index) => {
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
