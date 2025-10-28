import type { Task } from "@/shared/types";
import { Box, Checkbox, Flex, Separator, Text } from "@chakra-ui/react";
import { DotsThree } from "@phosphor-icons/react";
import React from "react";
import { Flag, CalendarDays } from "lucide-react";
import { PRIORITY } from "../constants/priority";
const Task = ({ title, priority, due_date, relativeDate }: Task) => {
  console.log("task re render");
  return (
    <Box border="1px solid" borderColor="gray.200" my={2} p={2}>
      <Flex direction="column">
        <Flex justifyContent="space-between">
          <Checkbox.Root>
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
        </Flex>
      </Flex>
    </Box>
  );
};

export default React.memo(Task);
