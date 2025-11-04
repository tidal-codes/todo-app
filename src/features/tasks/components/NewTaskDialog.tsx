import { useProjects } from "@/features/projects/hooks/useProjcts";
import Dialog from "@/shared/ui/Dialog";
import { Box, Flex, Input, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const NewTaskDialog = ({ children }: { children: React.ReactElement }) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const { projectID } = useParams();
  const projectTitle = useProjects().projects.find(
    (project) => project.id == projectID,
  )?.title;

  return (
    <Dialog trigger={children} open={open} setOpen={setOpen}>
      <Flex>
        <Flex color="gray.500" fontSize="sm" gap={1}>
          <Text>پروژه‌</Text>/<Text color="black"> {projectTitle}</Text>
        </Flex>
      </Flex>
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fontSize="lg"
        mt={3}
        border="none"
        _focus={{ border: "none", outline: "none" }}
        placeholder="عنوان فعالیت ..."
      />
      <Box>
        <Flex>
          <Text>تگ</Text>
          <Flex></Flex>
        </Flex>
        <Flex>
          <Text>مسئولین</Text>
          <Flex></Flex>
        </Flex>
        <Flex>
          <Text>موعد انجام</Text>
          <Flex></Flex>
        </Flex>
        <Flex>
          <Text>ایجاد شده توسط</Text>
          <Flex></Flex>
        </Flex>
        <Flex>
          <Text>توضیحات</Text>
          <Flex></Flex>
        </Flex>
      </Box>
    </Dialog>
  );
};

export default NewTaskDialog;
