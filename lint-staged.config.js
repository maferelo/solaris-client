module.exports = {
  "*.{js,ts,tsx}": [
    "npx eslint",
    "bash -c 'npm run tsc:check'",
    "npm run format:check",
  ],
};
