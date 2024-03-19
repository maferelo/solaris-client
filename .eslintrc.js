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
    },
  ],
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
  },
};
