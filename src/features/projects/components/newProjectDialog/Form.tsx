import { Flex, Input, Box, Textarea } from "@chakra-ui/react";
import { useFocus } from "@/shared/hooks/useFocus";
import { useAddNewProjectContext } from "../../contexts/NewProjectProvider";

const Form = () => {
  const inputRef = useFocus();
  const { form, handleChange } = useAddNewProjectContext();
  return (
    <Box p={3}>
      <Flex flexDirection="column" mb={2} gap={2}>
        <Input
          ref={inputRef}
          placeholder="نام پروژه"
          value={form.title}
          onChange={(e) => handleChange("title", e.target.value)}
        />
        <Textarea
          fontSize="sm"
          placeholder="توضیحات"
          minH="90px"
          value={form.description}
          onChange={(e) => handleChange("description", e.target.value)}
        />
      </Flex>
    </Box>
  );
};

export default Form;
