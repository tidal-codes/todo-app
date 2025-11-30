import { defineSlotRecipe } from "@chakra-ui/react";

export const selectRecipe = defineSlotRecipe({
  className: "chakra-select",
  slots: ["root", "control", "trigger", "valueText", "content", "item"],
  base: {
    root: {
      direction: "rtl",
    },
    trigger: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "150px",
      minH: "7",
      "--input-height": "7",
      px: "2",
      borderRadius: "l2",
      userSelect: "none",
      textAlign: "start",
      focusVisibleRing: "inside",
      _placeholderShown: {
        color: "fg.muted/80",
      },
      _disabled: {
        layerStyle: "disabled",
      },
      _invalid: {
        borderColor: "border.error",
      },
    },
    content: {
      border: "1px solid",
    },
  },
});
