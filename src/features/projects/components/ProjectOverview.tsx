import ManageMembers from "@/features/members/components/ManageMembers";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useProjects } from "../hooks/useProjcts";

const ProjectOverview = () => {
  const { projectID } = useParams();
  const { getProject } = useProjects();
  const project = getProject(projectID!);
  return (
    <Flex
      width="100%"
      alignItems="center"
      justifyContent="space-between"
      borderBottom="1px solid"
      borderColor="gray.200"
      py={3}
      px={5}
    >
      <Flex gap={2}>
        <Box
          borderRadius="xs"
          backgroundColor={project?.color}
          display="flex"
          alignItems="center"
          justifyContent="center"
          width={8}
          height={8}
        >
          <Text>{project?.icon}</Text>
        </Box>
        <Text>{project?.title}</Text>
      </Flex>
      <ManageMembers />
    </Flex>
  );
};

export default ProjectOverview;
