// eslint.config.js
import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigAsPlugin } from "@eslint/compat"; // For compatibility with older plugins
import tailwindcss from 'eslint-plugin-tailwindcss'; // For Tailwind CSS linting

export default [
  // Global ignores
  {
    ignores: ["dist", "node_modules", ".vite", "*.config.js"], // Add other files/folders to ignore
  },

  // Base JavaScript rules
  pluginJs.configs.recommended,

  // TypeScript specific configuration
  ...tseslint.configs.recommended, // Applies recommended TypeScript rules
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json", // Specify your tsconfig for type-aware linting
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser, // Browser globals (e.g., window, document)
        // Add any other specific global variables if needed
      },
    },
    settings: {
      react: {
        version: "detect", // Automatically detects the React version
      },
    },
    rules: {
      // TypeScript specific rules overrides or additions
      // Example: Disallow unused variables from TypeScript
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      // You might want to disable base JS rules that TypeScript handles
      "no-unused-vars": "off",
    },
  },

  // React specific configuration
  fixupConfigAsPlugin(pluginReactConfig), // Wrap recommended config for flat config compatibility
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      react: pluginReactConfig.plugins.react, // Ensure React plugin is accessible
    },
    rules: {
      // React specific rules
      "react/react-in-jsx-scope": "off", // Not needed for React 17+ with new JSX transform
      "react/prop-types": "off", // Often not needed with TypeScript
      // Add other React specific rules as needed
    },
  },

  // React Hooks rules
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    ...tseslint.configs.recommendedTypeChecked, // Use if you want more strict type checking rules for hooks
    rules: {
      // eslint-plugin-react-hooks rules (if you install it)
      // "react-hooks/rules-of-hooks": "error",
      // "react-hooks/exhaustive-deps": "warn",
    },
  },

  // Tailwind CSS specific configuration
  tailwindcss.configs.recommended, // Applies recommended Tailwind CSS linting rules
  {
    files: ["**/*.{js,jsx,ts,tsx}"], // Apply to relevant files
    rules: {
      // Tailwind CSS specific rule overrides
      // Example: Prevent unrecognized Tailwind classes (useful for typos)
      // "tailwindcss/no-custom-classname": "off", // uncomment if you have custom classes and want to ignore this rule
    },
  },

  // Other common rules
  {
    rules: {
      // General code style rules
      "indent": ["error", 2], // 2 spaces indentation
      "linebreak-style": ["error", "windows"], // For Windows line endings
      "quotes": ["error", "single"], // Single quotes for strings
      "semi": ["error", "always"], // Require semicolons
      "no-console": "warn", // Warn about console.log
      "prefer-const": "error", // Prefer const over let when possible
      "comma-dangle": ["error", "always-multiline"], // Trailing commas
    },
  },
];