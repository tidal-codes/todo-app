import { Button } from "@chakra-ui/react";

const SidebarItem = ({ title }: { title: string }) => {
  return (
    <Button
      variant="ghost"
      width="full"
      justifyContent="flex-start"
      _hover={{ bg: "gray.200" }}
    >
      {title}
    </Button>
  );
};

export default SidebarItem;
