import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Sentry from "@sentry/react-native";
import { ReactNode } from "react";

import { DetailsScreen } from "@/pages/details";
import { HomeScreen } from "@/pages/home-screen";
import { AppProvider } from "@/providers/app";

export type AppProps = {
  children: ReactNode;
};

type RootStackParamList = {
  Details: undefined;
  Home: undefined;
};

const routingInstrumentation = new Sentry.ReactNavigationInstrumentation();

Sentry.init({
  dsn: "https://2360ae10da41b9c1950f60c859ce2122@o1208436.ingest.us.sentry.io/4506945207599104",
  debug: false, // If `true`, Sentry will try to print out useful debugging information if something goes wrong with sending the event. Set it to `false` in production
  integrations: [new Sentry.ReactNativeTracing({ routingInstrumentation })],
  // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
  tracesSampleRate: 1.0,
});

const Stack = createNativeStackNavigator<RootStackParamList>();

function ProvidedApp() {
  const navigation = useNavigationContainerRef();

  return (
    <AppProvider>
      <NavigationContainer
        ref={navigation}
        onReady={() => {
          routingInstrumentation.registerNavigationContainer(navigation);
        }}
        children={
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen component={HomeScreen} name="Home" />
            <Stack.Screen component={DetailsScreen} name="Details" />
          </Stack.Navigator>
        }
      />
    </AppProvider>
  );
}

export const App = Sentry.wrap(ProvidedApp);
