import { useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import PhoneInput from "react-native-phone-input";

export default function Page() {
  const phone = useRef();

  return (
    <View style={styles.container} testID="log-in">
      <View style={styles.mainContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Enter your mobile number</Text>
        </View>
        <View style={styles.phoneInputContainer}>
          <PhoneInput
            initialCountry={"co"}
            ref={phone}
            textProps={{
              className: "text-red-500",
              style: styles.phoneInputText,
            }}
          />
          <Text style={styles.title}>E</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    padding: 21,
  },
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 987,
  },
  titleContainer: {
    borderWidth: 1,
  },
  phoneInputContainer: {
    flexDirection: "row",
    flex: 1,
    borderWidth: 1,
  },
  title: {
    fontSize: 55,
    fontWeight: "bold",
    marginBottom: 13,
  },
  phoneInputText: {
    borderRadius: 13,
    borderWidth: 2,
    fontSize: 34,
    fontWeight: "semibold",
    padding: 5,
  },
});
