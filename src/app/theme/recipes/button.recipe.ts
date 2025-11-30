// theme/recipes/button.ts
import { defineRecipe } from "@chakra-ui/react";

export const buttonRecipe = defineRecipe({
  base: {
    border: "none",
    fontWeight: "normal",
    borderRadius: "xs",
    "& :where(svg)": {
      width: 4,
      height: 4,
    },
    _focus: {
      outlineColor: "primary.600",
      _dark: {
        outlineColor: "primary.400",
      },
    },
  },
  variants: {
    variant: {
      solid: {
        color: "white",
        backgroundColor: "primary.600",
        _hover: { backgroundColor: "primary.700" },
        _focus: { backgroundColor: "brand.primary.500" },
        _dark: {
          backgroundColor: "primary.400",
          color: "white",
          _hover: {
            backgroundColor: "primary.500",
          },
        },
      },
      ghost: {
        _hover: {
          backgroundColor: "grey.100",
          _dark: { backgroundColor: "grey.800" },
        },
      },
      icon: {
        transition: "none",
        "& :where(svg)": {
          opacity: 0.6,
          width: 3.5,
          height: 3.5,
        },
        _hover: {
          backgroundColor: "grey.200",
          "& :where(svg)": {
            opacity: 1,
          },
        },
      },
      outline: {
        border: "1px solid",
      },
      rounded: {
        borderRadius: "full",
        _hover: {
          backgroundColor: "gray.100",
        },
      },
    },
    size: {
      sm: { px: 1, py: 1, fontSize: "xs" },
      md: { height: "7", px: 2, fontSize: "xs" },
      lg: { px: 1, py: 1, fontSize: "xs" },
      fit: { px: 1, py: 0.5 },
      xs_icon: {
        width: "5",
        height: "5",
      },
      square: {
        width: "7",
        height: "7",
        p: 0,
      },
    },
  },
  defaultVariants: {
    variant: "solid",
    size: "md",
  },
});
