import { Flex, CloseButton, Box, Text } from "@chakra-ui/react";

const Header = ({ handleClose }: { handleClose: () => void }) => {
  return (
    <Box p={3}>
      <Flex alignItems="center" justifyContent="space-between">
        <Text fontSize="xs">پروژه جدید</Text>
        <CloseButton onClick={handleClose} size="square" width={5} height={5} />
      </Flex>
    </Box>
  );
};

export default Header;
