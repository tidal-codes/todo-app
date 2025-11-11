import Dialog from "@/shared/ui/Dialog";
import { Separator } from "@chakra-ui/react";
import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import TaskContent from "./TaskContent";
import { useTasks } from "../../hooks/useTasks";
import type { Priority } from "@/shared/types";
import { NewTaskProvider } from "../../context/NewTaskProvider";

export interface NewTaskDialogForm {
  title: string;
  assignedMembers: { id: string }[];
  priority: Priority;
}

const NewTaskDialog = ({ children }: { children: React.ReactElement }) => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog trigger={children} open={open} setOpen={setOpen}>
      <NewTaskProvider>
        <Header />
        <Separator />
        <TaskContent />
        <Footer setOpen={setOpen} />
      </NewTaskProvider>
    </Dialog>
  );
};

export default NewTaskDialog;
