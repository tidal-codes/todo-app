import Dialog from "@/shared/ui/Dialog";
import { Box, Button, CloseButton, Image, Separator } from "@chakra-ui/react";
import React, { useState } from "react";
import Footer from "./Footer";
import Form from "./Form";
import { useAddNewProject } from "../../hooks/useAddNewProject";
import ChangeBanner from "./ChangeBanner";
import {
  NewProjectProvider,
  useAddNewProjectContext,
} from "../../contexts/NewProjectProvider";
import Banner from "./Banner";

export interface newProjectForm {
  icon: string;
  color: string;
  title: string;
  description: string;
}

const NewProject = ({ children }: { children: React.ReactElement }) => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog trigger={children} open={open} setOpen={setOpen}>
      <NewProjectProvider>
        <Banner />
        <Form />
        <Separator />
        <Footer setOpen={setOpen} />
      </NewProjectProvider>
    </Dialog>
  );
};

export default NewProject;
