import { Flex } from "@chakra-ui/react";
import ManageTasks from "@/features/tasks/components/ManageTasks";

const ProjectToolbar = () => {
  return (
    <Flex
      width="full"
      alignItems="center"
      justifyContent="space-between"
      py={3}
      px={5}
      borderBottom="1px solid"
      borderColor="gray.200"
    >
      <ManageTasks />
    </Flex>
  );
};

export default ProjectToolbar;
