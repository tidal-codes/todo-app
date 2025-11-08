import { Button, Flex } from "@chakra-ui/react";

interface Props {
  handleSubmit: () => void;
  isLoading: boolean;
  handleClose: () => void;
}
const Footer = ({ handleSubmit, isLoading, handleClose }: Props) => {
  return (
    <Flex gap={2} p={3}>
      <Button variant="outline" onClick={handleClose}>
        لغو
      </Button>
      <Button onClick={handleSubmit} loading={isLoading}>
        ثبت
      </Button>
    </Flex>
  );
};

export default Footer;
