import { FlatCompat } from "@eslint/eslintrc";
import { default as js } from "@eslint/js";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import unicorn from "eslint-plugin-unicorn";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const eslintConfig = [
  prettierRecommended,
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [".next/*", "node_modules/*", "build/*"],
  },
  {
    plugins: {
      unicorn,
    },
    rules: {
      "@typescript-eslint/array-type": [
        "warn",
        {
          default: "generic",
          readonly: "generic",
        },
      ],

      "@typescript-eslint/consistent-type-definitions": ["warn", "interface"],

      "@typescript-eslint/naming-convention": [
        "warn",
        {
          selector: "interface",
          format: ["PascalCase"],
        },
      ],

      "@typescript-eslint/no-empty-interface": "warn",

      "no-restricted-syntax": [
        "error",
        {
          selector:
            "TSTypeAliasDeclaration[typeAnnotation.type='TSIntersectionType']",
          message: "Use interfaces instead of type aliases for intersections.",
        },
      ],

      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
        },
      ],
    },
  },
];

export default eslintConfig;
