import type { Task } from "@/shared/types";
import { Box, Checkbox, Flex, Text } from "@chakra-ui/react";
import { DotsThree } from "@phosphor-icons/react";
import React from "react";

const Task = ({ title, priority }: Task) => {
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
        <Flex>
          <Box>{priority}</Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default React.memo(Task);
