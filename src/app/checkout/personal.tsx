import { View, StyleSheet } from "react-native";
import CustomButton from "../../components/custom-button";
import CustomTextInput from "../../components/custom-text-input";
import { router } from "expo-router";
import { useState } from "react";
import KeyboardAwareScrollView from "../../components/keyboard-aware-scroll-view";

const PersonalDetailsForm = () => {
  const [fullName, setFullName] = useState("");
  const onNext = () => {
    router.push("/checkout/payment");
  };

  return (
    <KeyboardAwareScrollView>
      <CustomTextInput label={"Full name"} placeholder={"John Doe"} />
      <CustomTextInput label={"Address"} placeholder={"Address"} />
      <View style={{ flexDirection: "row", gap: 5 }}>
        <CustomTextInput
          label={"City"}
          placeholder={"ex: London"}
          containerStyle={{ flex: 1 }}
        />
        <CustomTextInput
          label={"Post Code"}
          placeholder={"12345"}
          containerStyle={{ flex: 1 }}
        />
      </View>
      <CustomTextInput
        label={"Phone number"}
        placeholder={"(123) 456-7890"}
        inputMode={"tel"}
      />
      <CustomButton onPress={onNext} title={"Next"} style={styles.button} />
    </KeyboardAwareScrollView>
  );
};

export default PersonalDetailsForm;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "white",
    padding: 10,
    gap: 5,
  },
  button: {
    marginTop: "auto",
  },
  input: {
    borderWidth: 1,
    borderColor: "grainsboro",
    borderRadius: 5,
    padding: 10,
  },
});
