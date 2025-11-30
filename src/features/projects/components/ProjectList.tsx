import { Box, For, Grid } from "@chakra-ui/react";
import ProjectListItem from "./ProjectListItem";
import { useProjects } from "../hooks/useProjcts";
import { useProjectFilter } from "../contexts/ProjectsFilterProvider";
import { searchInArray } from "@/shared/utils/searchInArray";

const ProjectList = () => {
  const { projects } = useProjects();
  const { searchKeyword } = useProjectFilter();
  const searchedProjects = searchKeyword.trim()
    ? searchInArray(projects, (x) => {
        return x.title.includes(searchKeyword);
      })
    : projects;
  return (
    <Box p={5}>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap="3"
      >
        <For each={searchedProjects}>
          {(project) => {
            return <ProjectListItem key={project.id} {...project} />;
          }}
        </For>
      </Grid>
    </Box>
  );
};

export default ProjectList;
