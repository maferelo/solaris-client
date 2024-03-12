module.exports = {
  root: true,
  extends: ["universe/native", "universe/shared/typescript-analysis"],
  plugins: ["jest"],
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.d.tsx"],
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  ],
  env: {
    node: true,
    "jest/globals": true,
  },
  globals: {
    // Detox
    device: false,
    expect: false,
    waitFor: false,
    element: false,
    by: false,
  },
};
