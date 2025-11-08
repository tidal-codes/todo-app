import RadioCard from "@/shared/ui/RadioCard";
import { Text, Flex, For } from "@chakra-ui/react";
import React, { type ReactNode } from "react";
import { useFilter } from "../context/filter";
import { taskviewOptions } from "../constants/filterMenu";
import { useEffect, useState } from "react";
import Popover from "@/shared/ui/Popover";
import TaskSearch from "./TaskSearch";

const TaskFilterPopover = ({ children }: { children: ReactNode }) => {
  const { filter, setFilter } = useFilter();
  const { groupBy, sortBy } = filter;
  const [taskview, setTaskview] = useState(() => ({ groupBy, sortBy }));

  useEffect(() => {
    setTaskview({ groupBy, sortBy });
  }, [filter]);

  const handleChange = (type: keyof typeof taskview, value: string) => {
    if (!value) return;
    const updated = { ...taskview, [type]: value };
    setTaskview(updated);
    setFilter(updated);
  };
  return (
    <Popover ButtonComponent={children}>
      <Flex direction="column" gap={2}>
        <TaskSearch />
        <For each={taskviewOptions}>
          {(option) => {
            return (
              <React.Fragment key={option.type}>
                <Text textAlign="end">{option.title}</Text>
                <RadioCard
                  type={option.type}
                  value={taskview[option.type]}
                  handleChange={handleChange}
                  options={option.options}
                />
              </React.Fragment>
            );
          }}
        </For>
      </Flex>
    </Popover>
  );
};

export default TaskFilterPopover;
