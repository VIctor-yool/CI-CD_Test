import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"],
     plugins: { js }, extends: ["js/recommended"],
      languageOptions: { globals: globals.browser },
     rules: {
       "no-unused-vars": "warn",
       "eqeqeq": ["error", "always"],
       "no-console": "off",
       "curly": "error",
       "semi": ["off", "always"],
       "quotes": ["error", "double"],
       "no-var": "error",
       "prefer-const": "error",
       "no-undef": "warn"
     },
     },
  { files: ["**/*.js"],
     languageOptions: { sourceType: "commonjs" }
     },
]);
