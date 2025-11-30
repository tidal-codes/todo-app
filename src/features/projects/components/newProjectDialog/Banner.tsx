import { CloseButton, Button, Box, Image } from "@chakra-ui/react";
import ChangeBanner from "./ChangeBanner";
import { useAddNewProjectContext } from "../../contexts/NewProjectProvider";
import IconPicker from "@/shared/components/IconPicker";

const Banner = () => {
  const { form } = useAddNewProjectContext();
  return (
    <Box p={3}>
      <Box position="relative" mb={1.5}>
        <Image maxH={160} w="full" rounded="sm" src={form.banner} />
        <CloseButton position="absolute" size="square" top="2" right="2" />
        <ChangeBanner>
          <Button variant="subtle" position="absolute" right="2" bottom="2">
            تغییر بنر
          </Button>
        </ChangeBanner>
        <IconPicker>
          <Button
            variant="solid"
            size="square"
            p={5}
            fontSize="lg"
            translate="0 40%"
            backgroundColor="grey.200"
            position="absolute"
            bottom="0"
            left="5"
            fontFamily="icon"
            color="grey.800"
          >
            {form.icon}
          </Button>
        </IconPicker>
      </Box>
    </Box>
  );
};

export default Banner;
