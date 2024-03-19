import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
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

const Stack = createNativeStackNavigator<RootStackParamList>();

export function App() {
  return (
    <AppProvider>
      <NavigationContainer
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
