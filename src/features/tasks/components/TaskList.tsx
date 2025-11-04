import type { Task } from "@/shared/types";
import { Flex, For, Spinner } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useProcessedTasks } from "../hooks/useProcessedTasks";
import TaskGroup from "./TaskGroup";
import { useParams } from "react-router-dom";
import { supabaseGetTasks } from "@/app/api/taskApi";
import { preprocessTask } from "../utils/preprocessTasks";

const TaskList = () => {
  const { projectID } = useParams();
  const { data: tasks, isLoading } = useQuery<Task[]>({
    queryKey: ["tasks", `${projectID}`],
    queryFn: async () => {
      if (projectID) {
        const data = await supabaseGetTasks(projectID);
        return data.map((task) => preprocessTask(task));
      }
      return [];
    },
  });

  const groups = useProcessedTasks(tasks ? tasks : ([] as Task[]));

  return (
    <Flex width="full" gap={2} px={5} my={5} flex={1}>
      {!isLoading ? (
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
      ) : (
        <Spinner />
      )}
    </Flex>
  );
};

export default TaskList;
