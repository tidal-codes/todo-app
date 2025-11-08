import { Flex, Input, Box, Text, Button } from "@chakra-ui/react";
import type { newProjectForm } from "./NewProjectDialog";
import IconPicker from "@/shared/components/IconPicker";
import type React from "react";
import { useRef, useEffect } from "react";
import { useFocus } from "@/shared/hooks/useFocus";

interface FormProps {
  form: newProjectForm;
  handleChange: (type: keyof newProjectForm, value: string) => void;
  onEmojiSelect: (emoji: string) => void;
  onColorSelect: (color: string) => void;
}

const Form = ({
  form,
  handleChange,
  onEmojiSelect,
  onColorSelect,
}: FormProps) => {
  const inputRef = useFocus();

  return (
    <Box p={3}>
      <Flex flexDirection="column" mb={2} gap={2}>
        <IconPicker onEmojiSelect={onEmojiSelect} onColorSelect={onColorSelect}>
          <Button
            variant="outline"
            backgroundColor={form.color}
            size="square"
            width={8}
            height={8}
            borderRadius="sm"
          >
            <Text fontSize="lg">{form.icon}</Text>
          </Button>
        </IconPicker>
        <Input
          ref={inputRef}
          variant="ghost"
          fontSize="xl"
          placeholder="نام پروژه"
          value={form.title}
          onChange={(e) => handleChange("title", e.target.value)}
        />
        <Input
          variant="ghost"
          fontSize="sm"
          color="gray.500"
          placeholder="توضیح کوتاه ..."
          value={form.description}
          onChange={(e) => handleChange("description", e.target.value)}
        />
      </Flex>
    </Box>
  );
};

export default Form;
