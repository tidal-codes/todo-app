import { popoverAnatomy } from "../../anatomy";
import { defineSlotRecipe } from "../../styled-system";

export const popoverSlotRecipe = defineSlotRecipe({
  className: "chakra-popover",
  slots: popoverAnatomy.keys(),
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
