import { Box } from "@chakra-ui/react";
import ProjectToolbar from "../components/Toolbar";
import TaskList from "@/features/tasks/components/TaskList";
import { FilterProvider } from "@/features/tasks/context/filter";
import ProjectOverview from "../components/ProjectOverview";
const ProjectView = () => {
  return (
    <Box>
      <ProjectOverview />
      <FilterProvider>
        <ProjectToolbar />
        <TaskList />
      </FilterProvider>
    </Box>
  );
};

export default ProjectView;
