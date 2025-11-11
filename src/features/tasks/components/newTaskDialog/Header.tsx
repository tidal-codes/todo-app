import CloseButton from "@/shared/ui/CloseButton";
import { Button, Flex, Text } from "@chakra-ui/react";
import { Calendar, Flag } from "lucide-react";
import Menu from "@/shared/ui/Menu";
import { PRIORITY, priorityMenu } from "../../constants/priority";
import type { NewTaskDialogForm } from "./NewTaskDialog";
import type { Priority } from "@/shared/types";
import { UseNewTaskContext } from "../../context/NewTaskProvider";

const Header = () => {
  const { form, dispatch } = UseNewTaskContext();
  const onPriorityChange = (value: Priority) => {
    dispatch({ type: "SET_PRIORITY", value });
  };
  return (
    <Flex p={2} alignItems="center" justifyContent="space-between">
      <Flex>
        <Button variant="ghost" size="square" width="6" height="6">
          <Calendar />
        </Button>
        <Menu
          menuList={priorityMenu}
          value={form.priority}
          onChange={onPriorityChange}
        >
          <Button
            variant="ghost"
            size="square"
            width="6"
            height="6"
            color={PRIORITY.COLOR[form.priority]}
          >
            <Flag fill="currentColor" />
          </Button>
        </Menu>
      </Flex>
      <CloseButton />
    </Flex>
  );
};

export default Header;
