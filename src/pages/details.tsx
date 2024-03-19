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
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
  },
});
