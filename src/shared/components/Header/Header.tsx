import {
  Box,
  Button,
  Flex,
  IconButton,
  Input,
  InputGroup,
} from "@chakra-ui/react";
import { BellIcon, SearchIcon } from "lucide-react";
import Avatar from "@/shared/ui/Avatar";

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
        <IconButton
          aria-label="Notifications"
          variant="ghost"
          colorScheme="whiteAlpha"
        >
          <BellIcon />
        </IconButton>
        <InputGroup w="180px" startElement={<SearchIcon />}>
          <Input
            type="text"
            placeholder="Search"
            bg="white"
            color="black"
            _placeholder={{ color: "gray.500" }}
            borderRadius="md"
          />
        </InputGroup>
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
