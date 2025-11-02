import Dialog from "@/shared/ui/Dialog";
import Field from "@/shared/ui/Field";
import { Button, Flex } from "@chakra-ui/react";
import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import { addProject } from "../utils/projectServices";
import { useNavigate } from "react-router-dom";
import { syncProjects } from "@/app/sync/syncManager";

const NewProject = ({ children }: { children: React.ReactElement }) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    console.log();
  }, [name]);
  async function handleSubmit() {
    const id = `project-${nanoid(12)}`;
    await addProject(id, name);
    setOpen(false);
    navigate(`${id}`);
    await syncProjects();
  }
  return (
    <Dialog trigger={children} open={open} setOpen={setOpen}>
      <Flex flexDirection="column">
        <Field label="نام پروژه" value={name} onChange={setName} />
        <Flex mt={4} gap={2}>
          <Button variant="outline">لفو</Button>
          <Button onClick={handleSubmit}>ذخیره</Button>
        </Flex>
      </Flex>
    </Dialog>
  );
};

export default NewProject;
