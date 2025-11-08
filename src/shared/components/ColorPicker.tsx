import { Button, Flex, For } from "@chakra-ui/react";

const colors = [
  "red.300",
  "green.300",
  "yellow.300",
  "blue.300",
  "gray.300",
  "pink.300",
];

const ColorItem = ({ color }: { color: string }) => {
  return (
    <Button
      width={5}
      height={5}
      backgroundColor={color}
      borderRadius="full"
      px={0}
    ></Button>
  );
};

const ColorPicker = () => {
  return (
    <Flex>
      <For each={colors}>{(color) => <ColorItem color={color} />}</For>
    </Flex>
  );
};

export default ColorPicker;
