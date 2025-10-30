import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Item = ({
  id,
  title,
  active,
}: {
  id: string;
  title: string;
  active: boolean;
}) => {
  const navigate = useNavigate();
  return (
    <Button
      variant="ghost"
      width="full"
      justifyContent="flex-end"
      _hover={{ bg: "gray.200" }}
      backgroundColor={active ? "gray.200" : "transparent"}
      onClick={() => navigate(`${id}`)}
    >
      {title}
    </Button>
  );
};

export default Item;
