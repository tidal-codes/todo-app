import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import { buttonRecipe } from "./recipes/button.recipe";
import { DialogRecipe } from "./recipes/dialog.recipe";
import { inputRecipe } from "./recipes/input.recipe";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          primary: {
            100: { value: "#E7EEFF" },
            200: { value: "#C9DAFF" },
            300: { value: "#A6C3FF" },
            400: { value: "#7FAAFF" },
            500: { value: "#5B8DEF" },
            600: { value: "#4875D8" },
            700: { value: "#375EBF" },
            800: { value: "#2A4EA3" },
            900: { value: "#1F3C82" },
          },
          background: { value: "#F4F5F8" },
          text: { value: "#1e2024ff" },
          accent: { value: "#D2E0FF" },
          darkBackground: { value: "#222326" },
          darkText: { value: "#F4F5F8" },
        },
      },
      fonts: {
        body: { value: "iranYekan, sans-serif" },
        heading: { value: "iranYekan, sans-serif" },
      },
    },
    semanticTokens: {
      colors: {
        background: {
          value: {
            base: "{colors.brand.background}",
            _dark: "{colors.brand.darkBackground}",
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
