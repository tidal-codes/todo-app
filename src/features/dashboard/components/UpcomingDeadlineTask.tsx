import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const UpcomingDeadlineTask = () => {
  return (
    <Box>
      <Flex gap={2}>
        <Flex
          p={2}
          backgroundColor="grey.200"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
        >
          <Text fontSize="sm">12</Text>
          <Text fontSize="xs">آبان</Text>
        </Flex>
        <Box flex={1}>
          <Text truncate fontSize="sm">
            بسم الله الرحمن رحیم اسم من طاها درویشی است
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default UpcomingDeadlineTask;
