import { View, StyleSheet } from "react-native";
import CustomButton from "../../components/custom-button";
import CustomTextInput from "../../components/custom-text-input";
import { router } from "expo-router";
import KeyboardAwareScrollView from "../../components/keyboard-aware-scroll-view";
import { useForm, FormProvider } from "react-hook-form";

export default function PersonalDetailsForm() {
  const methods = useForm();

  const onNext = (data: any) => {
    console.log(data);
    router.push("/checkout/payment");
  };

  return (
    <KeyboardAwareScrollView>
      <FormProvider {...methods}>
        <CustomTextInput
          name="fullName"
          label={"Full name"}
          placeholder={"John Doe"}
        />
        <CustomTextInput
          name="address"
          label={"Address"}
          placeholder={"Address"}
        />

        <View style={{ flexDirection: "row", gap: 5 }}>
          <CustomTextInput
            name="city"
            label={"City"}
            placeholder={"ex: London"}
            containerStyle={{ flex: 1 }}
          />
          <CustomTextInput
            name="postalCode"
            label={"Post Code"}
            placeholder={"12345"}
            containerStyle={{ flex: 1 }}
          />
        </View>
        <CustomTextInput
          name="phoneNumber"
          label={"Phone number"}
          placeholder={"(123) 456-7890"}
          inputMode={"tel"}
        />
        <CustomButton
          onPress={methods.handleSubmit(onNext)}
          title={"Next"}
          style={styles.button}
        />
      </FormProvider>
    </KeyboardAwareScrollView>
  );
}

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
