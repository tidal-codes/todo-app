// theme/recipes/button.ts
import { defineRecipe } from "@chakra-ui/react";

export const buttonRecipe = defineRecipe({
  base: {
    fontWeight: "normal",
    borderRadius: "xs",
    // border: "none",
    "& :where(svg)": {
      width: 4,
      height: 4,
      /* یا از توکن‌ها استفاده کن: width: "4", height: "4" */
    },
  },
  variants: {
    variant: {
      solid: {
        backgroundColor: "brand.primary.600",
        _hover: { backgroundColor: "brand.primary.500" },
        _focus: { backgroundColor: "brand.primary.500" },
      },
      ghost: {
        opacity: "0.7",
        _hover: {
          opacity: "1",
          backgroundColor: "gray.100",
        },
      },
      outline: {
        borderWidth: "1px",
        borderColor: "gray.300",
      },
      icon: {
        backgroundColor: "red.400",
      },
    },
    size: {
      sm: { px: 1, py: 1, fontSize: "sm" },
      md: { height: "7", px: 2, fontSize: "sm" },
      lg: { px: 1, py: 1, fontSize: "lg" },
      square: { p: 0 },
    },
  },
  defaultVariants: {
    variant: "solid",
    size: "md",
  },
});
