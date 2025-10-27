import { Box, Checkbox, Flex, Text } from "@chakra-ui/react";
import { DotsThree } from "@phosphor-icons/react";

const Task = ({
  title,
  content = true,
}: {
  title: string;
  content: boolean;
}) => {
  return (
    <Box border="1px solid" borderColor="gray.200" my={2} p={2}>
      <Flex direction="column">
        <Flex justifyContent="space-between">
          <Checkbox.Root>
            <Checkbox.HiddenInput />
            <Checkbox.Control>
              <Checkbox.Indicator />
            </Checkbox.Control>
          </Checkbox.Root>
          <DotsThree size={24} />
        </Flex>
        <Box py={1}>
          <Text truncate={true}>{title}</Text>
          {content ? (
            <Text truncate={true} fontSize="xs" color="gray.500">
              {title}
            </Text>
          ) : null}
        </Box>
      </Flex>
    </Box>
  );
};

export default Task;
