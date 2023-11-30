console.log("storybookEnabled", process.env.STORYBOOK_ENABLED);

module.exports = ({ config }) => {
  return {
    ...config,
    extra: {
      ...config.extra,
      storybookEnabled: process.env.STORYBOOK_ENABLED,
    },
  };
};
