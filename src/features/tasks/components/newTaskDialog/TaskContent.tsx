import { Flex, Input, Textarea } from "@chakra-ui/react";
import { UseNewTaskContext } from "../../context/NewTaskProvider";

const TaskContent = () => {
  const { form, dispatch } = UseNewTaskContext();
  return (
    <Flex flexDirection="column" gap={3} p={2}>
      <Input
        value={form.title}
        onChange={(e) =>
          dispatch({ type: "UPDATE_TITLE", value: e.target.value })
        }
        fontSize="lg"
        mt={3}
        border="none"
        _focus={{ border: "none", outline: "none" }}
        placeholder="عنوان فعالیت ..."
      />
      <Textarea
        placeholder="توضیحات"
        value={form.description}
        onChange={(e) =>
          dispatch({ type: "UPDATE_DESCRIPTION", value: e.target.value })
        }
      />
    </Flex>
  );
};

export default TaskContent;
