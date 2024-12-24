import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../../components/custom-button";
import { router } from "expo-router";
import KeyboardAwareScrollView from "../../components/keyboard-aware-scroll-view";

export default function Confirm() {
  const onNext = () => {
    // validate
    // submit
    // redirect to home
    router.dismissAll();
    router.back();
  };

  return (
    <KeyboardAwareScrollView>
      <Text>Confirm submission</Text>
      <CustomButton onPress={onNext} title={"Submit"} style={styles.button} />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  button: {
    marginTop: "auto",
    marginBottom: 20,
  },
});
