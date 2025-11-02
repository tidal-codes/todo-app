import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          primary: { value: "#5E6AD2" },
          background: { value: "#F4F5F8" },
          text: { value: "#222326" },
          accent: { value: "#D2E0FF" },
          darkBackground: { value: "#222326" },
          darkText: { value: "#F4F5F8" },
        },
        gray: {
          100: { value: "#F4F5F8" },
          200: { value: "#E6E8EB" },
          300: { value: "#CED2D8" },
          400: { value: "#9CA3AF" },
          500: { value: "#6B7280" },
          600: { value: "#4B5563" },
          700: { value: "#374151" },
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
  },
});

export const system = createSystem(defaultConfig, config);
