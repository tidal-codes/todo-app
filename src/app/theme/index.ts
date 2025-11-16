import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import { buttonRecipe } from "./recipes/button.recipe";
import { DialogRecipe } from "./recipes/dialog.recipe";
import { inputRecipe } from "./recipes/input.recipe";
import { brandColors } from "./brandColors";

const config = defineConfig({
  globalCss: {
    "*": {
      borderColor: "!grey.300",
      _dark: { borderColor: "!grey.600" },
    },
  },
  theme: {
    tokens: {
      colors: brandColors,
      fonts: {
        body: { value: "iranYekan, sans-serif" },
        heading: { value: "iranYekan, sans-serif" },
      },
    },
    semanticTokens: {
      colors: {
        background: {
          value: {
            base: "{colors.grey.100}",
            _dark: "{colors.grey.900}",
          },
        },
        card: {
          value: {
            base: "{colors.grey.0}",
            _dark: "{colors.grey.950}",
          },
        },
        border: {
          value: {
            base: "{colors.grey.500}",
            _dark: "{{colors.grey.200}}",
          },
        },
        text: {
          value: {
            base: "{colors.brand.text}",
            _dark: "{colors.brand.darkText}",
          },
        },
        primary: {
          value: "{colors.brand.primary}",
        },
        accent: {
          value: "{colors.brand.accent}",
        },
      },
    },
    recipes: {
      button: buttonRecipe,
      dialog: DialogRecipe,
      input: inputRecipe,
    },
  },
});

export const system = createSystem(defaultConfig, config);
