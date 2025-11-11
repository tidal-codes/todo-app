import React, { useState } from "react";
import List from "./List";
import Popover from "@/shared/ui/Popover";
import { Box } from "@chakra-ui/react";
import type { NewTaskDialogForm } from "../newTaskDialog/NewTaskDialog";

const AssignMembersPopover = ({
  children,
  onAssign,
}: {
  children: React.ReactNode;
  onAssign: (type: keyof NewTaskDialogForm, value: string) => void;
}) => {
  return (
    <Popover ButtonComponent={children}>
      <Box minWidth="250px">
        <List onAssign={onAssign} />
      </Box>
    </Popover>
  );
};

export default AssignMembersPopover;
