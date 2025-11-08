import { defineRecipe } from "@chakra-ui/react";

export const inputRecipe = defineRecipe({
  variants: {
    variant: {
      size: {
        "2xs": {
          textStyle: "xs",
          px: "2",
          "--input-height": "sizes.7",
        },
        xs: {
          textStyle: "xs",
          px: "2",
          "--input-height": "sizes.8",
        },
        sm: {
          textStyle: "sm",
          px: "2.5",
          "--input-height": "sizes.9",
        },
        md: {
          textStyle: "sm",
          px: "3",
          "--input-height": "sizes.10",
        },
        lg: {
          textStyle: "md",
          px: "4",
          "--input-height": "sizes.11",
        },
        xl: {
          textStyle: "md",
          px: "4.5",
          "--input-height": "sizes.12",
        },
        "2xl": {
          textStyle: "lg",
          px: "5",
          "--input-height": "sizes.16",
        },
      },
      ghost: {
        paddingInline: 0,
        height: "fit",
      },
    },
  },
});
