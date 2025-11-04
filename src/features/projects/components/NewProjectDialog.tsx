import Dialog from "@/shared/ui/Dialog";
import Field from "@/shared/ui/Field";
import { Button, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { addProject } from "../services/projectServices";
import { useNavigate } from "react-router-dom";
import { useProjects } from "../hooks/useProjcts";

const NewProject = ({ children }: { children: React.ReactElement }) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const { addProject, isAdding } = useProjects();
  const navigate = useNavigate();

  async function handleSubmit() {
    const data = await addProject(title);
    navigate(`/app/${data.id}`);
    setTitle("");
    setOpen(false);
  }

  return (
    <Dialog trigger={children} open={open} setOpen={setOpen}>
      <Flex flexDirection="column">
        <Field label="نام پروژه" value={title} onChange={setTitle} />
        <Flex mt={4} gap={2}>
          <Button variant="outline">لفو</Button>
          <Button onClick={handleSubmit} loading={isAdding}>
            ذخیره
          </Button>
        </Flex>
      </Flex>
    </Dialog>
  );
};

export default NewProject;
