import type { Task } from "@/shared/types";
import { Box, Checkbox, Flex, Separator, Text } from "@chakra-ui/react";
import { DotsThree } from "@phosphor-icons/react";
import React from "react";
import { Flag, CalendarDays } from "lucide-react";
import { PRIORITY } from "../constants/priority";
import { setTaskComplete } from "../services/taskServices";
import { Tooltip } from "@/shared/ui/Tooltip";
const Task = ({
  id,
  title,
  priority,
  due_date,
  dateString,
  relativeDate,
  is_completed,
}: Task) => {
  console.log("task re render");
  function handleSubmit(id: string) {
    setTaskComplete(id);
  }
  return (
    <Box border="1px solid" borderColor="gray.200" my={2} p={2}>
      <Flex direction="column">
        <Flex justifyContent="space-between">
          <Checkbox.Root
            checked={is_completed}
            onCheckedChange={() => handleSubmit(id)}
          >
            <Checkbox.HiddenInput />
            <Checkbox.Control>
              <Checkbox.Indicator />
            </Checkbox.Control>
          </Checkbox.Root>
          <DotsThree size={24} />
        </Flex>
        <Box py={1}>
          <Text truncate={true}>{title}</Text>
        </Box>
        <Separator my={2} />
        <Flex gap={2}>
          {priority ? (
            <Flex
              alignItems="center"
              gap={1}
              border="1px solid"
              borderColor="gray.300"
              px={2}
            >
              <Flag size={14} />
              {PRIORITY.LABLE[priority]}
            </Flex>
          ) : null}
          <Tooltip showArrow content={dateString}>
            <Flex
              alignItems="center"
              gap={1}
              border="1px solid"
              borderColor="gray.300"
              px={2}
            >
              <CalendarDays size={14} />
              <span>{relativeDate}</span>
            </Flex>
          </Tooltip>
        </Flex>
      </Flex>
    </Box>
  );
};

export default React.memo(Task);
