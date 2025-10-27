import {
  HStack,
  RadioCard as BaseRadioCard,
  Flex,
  Text,
} from "@chakra-ui/react";
import type React from "react";

type RadioCard = {
  type: "groupBy" | "sortBy";
  value: string;
  handleChange: (type: "groupBy" | "sortBy", value: string) => void;
  options: ReadonlyArray<{
    title: string;
    icon: React.ReactNode;
    value: string;
  }>;
};
const RadioCard = ({ type, value, handleChange, options }: RadioCard) => {
  return (
    <BaseRadioCard.Root
      onValueChange={({ value }) => {
        if (!value) return;
        handleChange(type, value);
      }}
      value={value}
      size="sm"
    >
      <HStack align="stretch">
        {options.map((option) => (
          <BaseRadioCard.Item key={option.value} value={option.value}>
            <BaseRadioCard.ItemHiddenInput />
            <BaseRadioCard.ItemControl py={2} justifyContent="center">
              <Flex gap={1} color="gray.600">
                <Text color="ButtonText">{option.title}</Text>
                {option.icon}
              </Flex>
            </BaseRadioCard.ItemControl>
          </BaseRadioCard.Item>
        ))}
      </HStack>
    </BaseRadioCard.Root>
  );
};
export default RadioCard;
