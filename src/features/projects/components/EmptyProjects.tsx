import { Box, Flex, Image, Text } from "@chakra-ui/react";
import emptyFolder from "@/assets/images/empty-folder.png";

const EmptyProjects = () => {
  return (
    <Flex flexDirection="column" justifyContent="center" gap={3}>
      <Flex alignItems="center" justifyContent="center">
        <Image src={emptyFolder} height="100px" />
      </Flex>
      <Flex flexDirection="column">
        <Text fontSize="sm" color="gray.400">
          هیج پروژه‌ای انتخاب نشده
        </Text>
      </Flex>
    </Flex>
  );
};

export default EmptyProjects;
