import { Button, Flex } from "@chakra-ui/react";
import { useAddNewProjectContext } from "../../contexts/NewProjectProvider";

const Footer = ({ setOpen }) => {
  const { handleSubmit, isAdding } = useAddNewProjectContext();
  const addProject = async () => {
    await handleSubmit();
    setOpen(false);
  };
  const closeModal = () => {
    setOpen(false);
  };
  return (
    <Flex gap={2} p={3}>
      <Button variant="outline" onClick={closeModal}>
        لغو
      </Button>
      <Button onClick={addProject} loading={isAdding}>
        ثبت
      </Button>
    </Flex>
  );
};

export default Footer;
