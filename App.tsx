import { Button, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
    return (
      <View style={styles.container} testID="home">
        <Text>Welcome!</Text>
        <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      </View>
    );
  }

  function DetailsScreen() {
    return (
      <View style={styles.container} testID="details">
        <Text>Details</Text>
      </View>
    );
  }

  const Stack = createNativeStackNavigator();

  function App() {
    return (
      <NavigationContainer 
        children={
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Details" component={DetailsScreen} />
            </Stack.Navigator>
        }
      />
    );
  }

let AppEntryPoint = App;

if (Constants.expoConfig?.extra?.storybookEnabled === "true") {
  AppEntryPoint = require("./.storybook").default;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AppEntryPoint;
