import { Box, Button } from "@chakra-ui/react";
import SidebarProjectsList from "@/features/projects/components/SidebarList";
import { Plus } from "lucide-react";
import NewProject from "@/features/projects/components/newProjectDialog";

const Sidebar = () => {
  return (
    <Box
      bg="background"
      width="200px"
      height="100vh"
      borderEnd="1px solid"
      borderColor="gray.200"
      px={3}
      py={5}
    >
      <Box mb={3}>
        <NewProject></NewProject>
      </Box>
      <SidebarProjectsList />
    </Box>
  );
};

export default Sidebar;
