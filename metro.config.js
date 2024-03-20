// Learn more https://docs.expo.io/guides/customizing-metro
const { getSentryExpoConfig } = require("@sentry/react-native/metro");
const { generate } = require("@storybook/react-native/scripts/generate");
const path = require("path");

generate({
  configPath: path.resolve(__dirname, "./.storybook"),
});

/** @type {import('expo/metro-config').MetroConfig} */
const config = getSentryExpoConfig(__dirname);

// Storybook required to enable dynamic story imports
config.transformer.unstable_allowRequireContext = true;

config.resolver.sourceExts.push("mjs");

// Prevent storybook files from being bundled in the app
config.resolver.resolveRequest = (context, moduleName, platform) => {
  const defaultResolveResult = context.resolveRequest(
    context,
    moduleName,
    platform,
  );

  if (
    process.env.STORYBOOK_ENABLED !== "true" &&
    defaultResolveResult?.filePath?.includes?.(".storybook/")
  ) {
    return {
      type: "empty",
    };
  }

  return defaultResolveResult;
};

module.exports = config;
