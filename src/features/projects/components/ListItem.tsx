import { Box, Button, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const ListItem = ({
  id,
  title,
  icon,
  color,
  active,
}: {
  id: string;
  title: string;
  icon: string;
  color: string;
  active: boolean;
}) => {
  const navigate = useNavigate();
  console.log(color);
  return (
    <Button
      variant="outline"
      width="full"
      justifyContent="flex-end"
      _hover={{ bg: "gray.200" }}
      py={5}
      mb={2}
      backgroundColor={active ? "gray.200" : "transparent"}
      onClick={() => navigate(`${id}`)}
    >
      <Text fontSize="sm" truncate>
        {title}
      </Text>
      <Box
        width={7}
        height={7}
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius="xs"
        backgroundColor={color}
      >
        <Text>{icon}</Text>
      </Box>
    </Button>
  );
};

export default ListItem;
