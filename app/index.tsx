import Constants from "expo-constants";
import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

function Page() {
  return (
    <Link href="/log-in" asChild testID="welcome">
      <Pressable style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.title}>Omibus</Text>
        </View>
      </Pressable>
    </Link>
  );
}

let Entrypoint = Page;

if (Constants.expoConfig.extra.storybookEnabled === "true")
  Entrypoint = require("../.storybook").default;

export default Entrypoint;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
