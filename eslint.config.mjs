import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettierConfig from "eslint-config-prettier/flat";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  prettierConfig,

  globalIgnores([".next/**", "out/**", "build/**", "dist/**", "coverage/**", "node_modules/**"]),

  {
    rules: {
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          fixStyle: "inline-type-imports",
        },
      ],
      "react/react-in-jsx-scope": "off",
    },
  },

  {
    files: ["src/components/shared/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["@/components/brand/*", "@/components/brand/**/*"],
              message: "Shared components must not import from brand components.",
            },
            {
              group: ["@/app/*", "@/app/**/*"],
              message: "Shared components must not import from app.",
            },
          ],
        },
      ],
    },
  },

  {
    files: ["src/components/brand/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["@/app/*", "@/app/**/*"],
              message: "Brand components must not import from app.",
            },
          ],
        },
      ],
    },
  },

  {
    files: ["src/lib/types/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["@/app/*", "@/app/**/*"],
              message: "Types must not import from app.",
            },
            {
              group: ["@/components/*", "@/components/**/*"],
              message: "Types must not import from components.",
            },
            {
              group: ["@/lib/core/*", "@/lib/core/**/*"],
              message: "Types must not import from lib/core.",
            },
            {
              group: ["@/lib/brands/*", "@/lib/brands/**/*"],
              message: "Types must not import from lib/brands.",
            },
          ],
        },
      ],
    },
  },

  {
    files: ["src/lib/brands/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["@/app/*", "@/app/**/*"],
              message: "Brand config must not import from app.",
            },
            {
              group: ["@/components/*", "@/components/**/*"],
              message: "Brand config must not import from components.",
            },
            {
              group: ["@/lib/core/*", "@/lib/core/**/*"],
              message: "Brand config should stay pure and not import from lib/core.",
            },
          ],
        },
      ],
    },
  },

  {
    files: ["src/lib/core/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["@/app/*", "@/app/**/*"],
              message: "lib/core must not import from app.",
            },
            {
              group: ["@/components/*", "@/components/**/*"],
              message: "lib/core must not import from components.",
            },
          ],
        },
      ],
    },
  },
]);
