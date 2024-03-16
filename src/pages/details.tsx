import { StyleSheet, View } from "react-native";

import { Text } from "@/components/text";

export function DetailsScreen() {
  return (
    <View style={styles.container} testID="details">
      <Text>Details</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
