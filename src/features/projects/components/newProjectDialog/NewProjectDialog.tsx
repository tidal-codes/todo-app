import Dialog from "@/shared/ui/Dialog";
import { Separator } from "@chakra-ui/react";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";
import { useAddNewProject } from "../../hooks/useAddNewProject";

export interface newProjectForm {
  icon: string;
  color: string;
  title: string;
  description: string;
}

const NewProject = ({ children }: { children: React.ReactElement }) => {
  const {
    open,
    setOpen,
    form,
    handleChange,
    handleClose,
    handleSubmit,
    onEmojiSelect,
    onColorSelect,
    isAdding,
  } = useAddNewProject();

  return (
    <Dialog trigger={children} open={open} setOpen={setOpen}>
      <Header handleClose={handleClose} />
      <Form
        form={form}
        handleChange={handleChange}
        onColorSelect={onColorSelect}
        onEmojiSelect={onEmojiSelect}
      />
      <Separator />
      <Footer
        handleSubmit={handleSubmit}
        isLoading={isAdding}
        handleClose={handleClose}
      />
    </Dialog>
  );
};

export default NewProject;
