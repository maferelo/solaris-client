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
  Home: undefined;
  Details: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function App() {
  return (
    <AppProvider>
      <NavigationContainer
        children={
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
          </Stack.Navigator>
        }
      />
    </AppProvider>
  );
}
