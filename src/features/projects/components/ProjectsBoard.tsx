import { Box, Separator, Text } from "@chakra-ui/react";
import ProjectsBoardHeader from "./ProjectsBoardHeader";
import ProjectList from "./ProjectList";
import { ProjectFilterProvider } from "../contexts/ProjectsFilterProvider";

const ProjectsBoard = () => {
  return (
    <Box>
      <ProjectFilterProvider>
        <ProjectsBoardHeader />
        <Separator />
        <ProjectList />
      </ProjectFilterProvider>
    </Box>
  );
};

export default ProjectsBoard;
