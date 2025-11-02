import { Flex } from "@chakra-ui/react";
import EmptyProjects from "../components/EmptyProjects";

const EmptyProjectPage = () => {
  return (
    <Flex
      width="100%"
      height="100%"
      alignItems="center"
      justifyContent="center"
    >
      <EmptyProjects />
    </Flex>
  );
};

export default EmptyProjectPage;
