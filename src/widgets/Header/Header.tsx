import { Box, Button, Avatar } from "@chakra-ui/react";
import { CloudSlash, GearSix } from "@phosphor-icons/react";

const Header = () => {
  return (
    <Box
      bg="background"
      width="full"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      borderBottom="1px solid"
      borderColor="gray.200"
      py={1}
      px={5}
    >
      <Box display="flex" alignItems="center" gap="2">
        <Button variant="subtle" width="40px" height="40px">
          <GearSix />
        </Button>
        <Button variant="subtle" width="40px" height="40px">
          <CloudSlash />
        </Button>
      </Box>
      <Box>
        <Avatar.Root size="md">
          <Avatar.Fallback name="Segun Adebayo" />
          <Avatar.Image src="https://bit.ly/sage-adebayo" />
        </Avatar.Root>
      </Box>
    </Box>
  );
};

export default Header;
