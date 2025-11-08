import { Tooltip } from "@/shared/ui/Tooltip";
import { Box, Button, Avatar, Text, Flex } from "@chakra-ui/react";
import { Settings } from "lucide-react";
import Sync from "./Sync";

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
      py={2}
      px={5}
    >
      <Flex alignItems="center" gap="2">
        <Tooltip content="تنظیمات" showArrow>
          <Button variant="subtle" width="40px" height="40px">
            <Settings />
          </Button>
        </Tooltip>
        <Sync />
      </Flex>
      <Flex alignItems="center" gap={2}>
        <Avatar.Root size="md">
          <Avatar.Fallback name="Segun Adebayo" />
          <Avatar.Image src="https://bit.ly/sage-adebayo" />
        </Avatar.Root>
      </Flex>
    </Box>
  );
};

export default Header;
