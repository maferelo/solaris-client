module.exports = {
  root: true,
  extends: ["universe/native", "universe/shared/typescript-analysis"],
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
  },
};
