module.exports = {
  env: {
    "jest/globals": true,
    node: true,
  },
  extends: ["universe/native", "universe/shared/typescript-analysis"],
  globals: {
    by: false,
    // Detox
    device: false,
    element: false,
    expect: false,
    waitFor: false,
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.d.tsx"],
      parserOptions: {
        project: "./tsconfig.json",
      },
      rules: {
        "@typescript-eslint/naming-convention": [
          "error",
          {
            selector: "variable",
            format: ["camelCase", "UPPER_CASE"],
            types: ["boolean", "string", "number", "array"],
          },
          {
            selector: "parameter",
            format: ["camelCase"],
            leadingUnderscore: "allow",
          },
          {
            selector: "property",
            format: ["camelCase", "PascalCase", "snake_case"],
          },
          {
            selector: "typeLike",
            format: ["PascalCase"],
          },
          {
            selector: "enumMember",
            format: ["PascalCase", "UPPER_CASE"],
          },
        ],
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["jest", "perfectionist"],
  root: true,
  rules: {
    // Rule reference: https://eslint.org/docs/latest/rules/
    "import/no-cycle": "error",
    "no-restricted-imports": [
      "error",
      {
        patterns: ["@/features/*/*"],
      },
    ],
    "perfectionist/sort-interfaces": "error",
    "react/jsx-boolean-value": ["error", "never"],
  },
};
