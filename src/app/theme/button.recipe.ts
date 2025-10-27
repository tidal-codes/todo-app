import { defineRecipe } from "@chakra-ui/react";

export const button = defineRecipe({
  base: {
    display: "flex",
  },
  variants: {
    variant: {
      solid: { bg: "red.200", color: "white" },
      outline: { borderWidth: "1px", borderColor: "red.200" },
      ghost: { bg: "transparent" },
    },
    size: {
      sm: { padding: "4", fontSize: "12px" },
      lg: { padding: "8", fontSize: "24px" },
    },
  },
});
