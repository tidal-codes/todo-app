import { Box, For, Button } from "@chakra-ui/react";
import Item from "./Item";
import Collapsible from "@/shared/ui/collapsible";
import { FolderKanban } from "lucide-react";

const data = [{ title: "خانه" }, { title: "سطل زباله" }, { title: "تمام شده" }];

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
      <Collapsible>
        <For each={data}>{(item) => <Item title={item.title} />}</For>
      </Collapsible>
    </Box>
  );
};

export default Sidebar;
