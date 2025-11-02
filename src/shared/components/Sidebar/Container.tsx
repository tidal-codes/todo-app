import { Box } from "@chakra-ui/react";
import SidebarProjectsList from "@/features/projects/components/SidebarList";

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
      <SidebarProjectsList />
    </Box>
  );
};

export default Sidebar;
