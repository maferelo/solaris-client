import * as Sentry from "@sentry/react-native";
import Constants from "expo-constants";

import { App } from "@/pages/_app";

Sentry.init({
  dsn: "https://2360ae10da41b9c1950f60c859ce2122@o1208436.ingest.us.sentry.io/4506945207599104",
  debug: true, // If `true`, Sentry will try to print out useful debugging information if something goes wrong with sending the event. Set it to `false` in production
});

let AppEntryPoint = Sentry.wrap(App);

if (Constants.expoConfig?.extra?.storybookEnabled === "true") {
  AppEntryPoint = require("./.storybook").default;
}

export default AppEntryPoint;
