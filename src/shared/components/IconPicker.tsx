import React, { useState } from "react";
import { Box, Button, Flex, Separator, SimpleGrid } from "@chakra-ui/react";
import Popover from "../ui/Popover";

const COLORS = [
  "green.300",
  "red.300",
  "blue.300",
  "yellow.300",
  "pink.300",
  "gray.300",
];
const EMOJIS = [
  "😀",
  "😎",
  "🥳",
  "😊",
  "🤔",
  "😴",
  "😂",
  "😭",
  "😡",
  "🤯",
  "🤩",
  "😇",
  "❤️",
  "🔥",
  "👍",
  "👎",
  "🙌",
  "👏",
  "💀",
  "💫",
  "🌟",
  "✨",
  "⚡",
  "🚀",
  "🎯",
  "📱",
  "💻",
  "🧠",
  "🎮",
  "🏆",
];

interface Props {
  onEmojiSelect: (emoji: string) => void;
  onColorSelect: (color: string) => void;
  children: React.ReactElement;
}
export default function IconPicker({
  onEmojiSelect,
  onColorSelect,
  children,
}: Props) {
  return (
    <Popover ButtonComponent={children}>
      <Box maxWidth="200px">
        <Flex justifyContent="space-between" p={2}>
          {COLORS.map((color) => (
            <Button
              key={color}
              onClick={() => onColorSelect(color)}
              width={7}
              height={7}
              size="square"
              borderRadius="full"
              bg={color}
            />
          ))}
        </Flex>

        <Separator />
        <SimpleGrid columns={5} padding={2}>
          {EMOJIS.map((emoji) => (
            <Button
              key={emoji}
              size="square"
              variant="ghost"
              fontSize="24px"
              onClick={() => onEmojiSelect(emoji)}
              _hover={{ bg: "gray.100" }}
            >
              {emoji}
            </Button>
          ))}
        </SimpleGrid>
      </Box>
    </Popover>
  );
}
