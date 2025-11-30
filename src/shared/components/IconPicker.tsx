import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import Popover from "../ui/Popover";
import { useState } from "react";
import { Box, Button, For, SimpleGrid, Span } from "@chakra-ui/react";
import { iconPickerData } from "../constants/iconPickerData";
import { useAddNewProjectContext } from "@/features/projects/contexts/NewProjectProvider";

export default function IconPicker({ children }) {
  const [open, setOpen] = useState(false);
  const { onIconSelect } = useAddNewProjectContext();
  return (
    <Popover open={open} setOpen={setOpen} ButtonComponent={children}>
      <Box p={3} overflowY="scroll">
        {open && (
          <SimpleGrid columns={8} gap={2}>
            <For each={iconPickerData}>
              {(item) => {
                return (
                  <Button
                    variant="ghost"
                    size="square"
                    onClick={() => onIconSelect(item)}
                  >
                    <Box as={Span} fontFamily="icon" fontSize="lg">
                      {item}
                    </Box>
                  </Button>
                );
              }}
            </For>
          </SimpleGrid>
        )}
      </Box>
    </Popover>
  );
}
