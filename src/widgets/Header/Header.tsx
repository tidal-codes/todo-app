import { useAuth } from "@/features/auth/context/AuthProvider";
import { Box, Button, Avatar, Text, Flex } from "@chakra-ui/react";
import { CloudSlash, GearSix } from "@phosphor-icons/react";

const Header = () => {
  const { user } = useAuth();
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
      <Flex alignItems="center" gap="2">
        <Button variant="subtle" width="40px" height="40px">
          <GearSix />
        </Button>
        <Button variant="subtle" width="40px" height="40px">
          <CloudSlash />
        </Button>
        <Button height={8} px={2} fontSize="sm">
          پروژه جدید
        </Button>
      </Flex>
      <Flex alignItems="center" gap={2}>
        <Text fontSize="sm">{user?.email}</Text>
        <Avatar.Root size="md">
          <Avatar.Fallback name="Segun Adebayo" />
          <Avatar.Image src="https://bit.ly/sage-adebayo" />
        </Avatar.Root>
      </Flex>
    </Box>
  );
};

export default Header;
