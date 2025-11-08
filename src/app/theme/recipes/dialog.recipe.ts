import { defineSlotRecipe } from "@chakra-ui/react";

export const DialogRecipe = defineSlotRecipe({
  slots: ["content"],
  base: {
    content: {
      backgroundColor: "red.500",
    },
  },
  variants: {},
});
