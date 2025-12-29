import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  {
    ignores: [
      // Build outputs
      ".next/**",
      "out/**",
      "build/**",
      "dist/**",
      // Dependencies
      "node_modules/**",
      // TypeScript
      "next-env.d.ts",
      // Config files
      "*.config.js",
      "*.config.mjs",
      "*.config.ts",
      // Environment files
      ".env*",
      // Logs
      "*.log",
    ],
  },
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      // Enforce consistent code style
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-unused-vars": "off", // TypeScript handles this
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      // React specific rules
      "react/no-unescaped-entities": "warn",
      "react-hooks/exhaustive-deps": "warn",
      // Accessibility - allow hash links for smooth scrolling
      "jsx-a11y/anchor-is-valid": [
        "warn",
        {
          components: ["Link"],
          specialLink: ["hrefLeft", "hrefRight"],
          aspects: ["preferButton"],
        },
      ],
    },
  },
]);

export default eslintConfig;
