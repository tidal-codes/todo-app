import { Box, For } from "@chakra-ui/react";
import SidebarItem from "./SidebarItem";

const data = [{ title: "خانه" }, { title: "سطل زباله" }, { title: "تمام شده" }];
const Sidebar = () => {
  return (
    <Box
      bg="background"
      maxWidth="200px"
      height="100vh"
      borderEnd="1px solid"
      borderColor="gray.200"
      px={3}
      py={5}
    >
      <For each={data}>{(item) => <SidebarItem title={item.title} />}</For>
    </Box>
  );
};

export default Sidebar;
