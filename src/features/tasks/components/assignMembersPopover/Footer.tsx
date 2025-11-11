import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import { UseNewTaskContext } from "../../context/NewTaskProvider";

const Footer = () => {
  return (
    <Flex borderTop="1px solid" borderColor="gray.300" p={2} gap={2}>
      <Button variant="outline">لغو</Button>
      <Button>تایید</Button>
    </Flex>
  );
};

export default Footer;
