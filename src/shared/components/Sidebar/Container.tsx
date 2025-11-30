import { Box, For, VStack } from "@chakra-ui/react";
import { FolderKanban, LayoutDashboard, Settings, Users } from "lucide-react";
import SidebarItem from "./SidebarItem";
import { useLocation } from "react-router-dom";
import { searchInArray } from "@/shared/utils/searchInArray";
const list = [
  { path: "dashboard", icon: <LayoutDashboard />, title: "داشبورد" },
  { path: "projects", icon: <FolderKanban />, title: "پروژه ها" },
  { path: "team", icon: <Users />, title: "تیم" },
  { path: "setting", icon: <Settings />, title: "تنظیمات" },
];

const Sidebar = () => {
  const location = useLocation();
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
      <VStack gap={1}>
        <For each={list}>
          {(item) => {
            return (
              <SidebarItem
                key={item.path}
                {...item}
                isActive={location.pathname.includes(item.path)}
              />
            );
          }}
        </For>
      </VStack>
    </Box>
  );
};

export default Sidebar;
