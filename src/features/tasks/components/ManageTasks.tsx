import { Button, Flex } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import NewTaskDialog from "./NewTaskDialog";
import TaskFilterPopover from "./TaskFilterPopover";
import { Funnel } from "lucide-react";

const ManageTasks = () => {
  return (
    <Flex>
      <NewTaskDialog>
        <Button variant="outline">تسک جدید</Button>
      </NewTaskDialog>
      <TaskFilterPopover>
        <IconButton variant="ghost">
          <Funnel />
        </IconButton>
      </TaskFilterPopover>
    </Flex>
  );
};

export default ManageTasks;
