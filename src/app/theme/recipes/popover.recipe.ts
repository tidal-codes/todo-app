import { defineSlotRecipe } from "@chakra-ui/react";

export const popoverSlotRecipe = defineSlotRecipe({
  className: "chakra-popover",
  slots: ["content"],
  base: {},
  variants: {
    size: {
      xs: {
        content: {
          "--popover-padding": "spacing.3",
        },
      },
      sm: {
        content: {
          "--popover-padding": "spacing.4",
        },
      },
      md: {
        content: {
          "--popover-padding": "spacing.5",
          width: "fit-content",
          border: "1px solid",
        },
      },
      lg: {
        content: {
          "--popover-padding": "spacing.6",
        },
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});
