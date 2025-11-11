import type { Task } from "@/shared/types";
import { Box, Flex, Separator, Text } from "@chakra-ui/react";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Task = ({
  title,
  description,
  priority,
  task_assignments,
  dateString,
  relativeDate,
}: Task) => {
  return (
    <Box
      border="1px solid"
      borderColor="gray.200"
      my={2}
      p={2}
      borderRadius="xs"
    >
      <Flex direction="column">
        <Header
          dateString={dateString}
          relativeDate={relativeDate}
          priority={priority}
        />
        <Flex flexDirection="column" gap={1} py={1}>
          <Text truncate={true}>{title}</Text>
          {description && (
            <Text truncate={true} fontSize="xs" color="gray.500">
              {description}
            </Text>
          )}
        </Flex>
        <Separator my={2} />
        <Footer task_assignments={task_assignments} />
      </Flex>
    </Box>
  );
};

export default React.memo(Task);
