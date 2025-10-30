import { Button } from "@chakra-ui/react";

const Item = ({ title }: { title: string }) => {
  return (
    <Button
      variant="ghost"
      width="full"
      justifyContent="flex-end"
      _hover={{ bg: "gray.200" }}
    >
      {title}
    </Button>
  );
};

export default Item;
