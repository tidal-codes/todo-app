import { Button, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
interface SidebarItemsPros {
  path: string;
  icon: React.ReactElement;
  title: string;
  isActive: boolean;
}
const SidebarItem = ({ path, icon, title, isActive }: SidebarItemsPros) => {
  return (
    <Button
      as={Link}
      to={`/app/${path}`}
      fontSize="sm"
      w="full"
      justifyContent="start"
      backgroundColor={isActive ? "grey.200" : "transparent"}
      color="black"
      _hover={{ backgroundColor: "grey.200/30" }}
    >
      {icon}
      <Text>{title}</Text>
    </Button>
  );
};

export default SidebarItem;
