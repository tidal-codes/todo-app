import { Tooltip } from "@/shared/ui/Tooltip";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { Moon, Plus, Settings, Sun } from "lucide-react";
import { useColorMode } from "@/app/theme/color-mode";
import Avatar from "@/shared/ui/Avatar";
import ChangeTheme from "./ChangeTheme";

const Header = () => {
  return (
    <Box
      backgroundColor="card"
      width="full"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      borderBottom="1px solid"
      py={2}
      px={5}
    >
      <Flex alignItems="center" gap="2">
        <ChangeTheme />

        <Button gap={1}>
          <Text>پروژه جدید</Text>
        </Button>
      </Flex>
      <Flex alignItems="center" gap={2}>
        <Button variant="ghost" size="square" rounded="full">
          <Avatar src={null} name="tidal t" size="xs" />
        </Button>
      </Flex>
    </Box>
  );
};

export default Header;
