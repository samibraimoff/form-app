import { View, StyleSheet } from "react-native";
import CustomButton from "../../components/custom-button";
import CustomTextInput from "../../components/custom-text-input";
import { router } from "expo-router";
import KeyboardAwareScrollView from "../../components/keyboard-aware-scroll-view";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const PersonalInfoSchema = z.object({
  fullName: z
    .string({ message: "Full name is required!" })
    .min(1, { message: "Full name must be longer than 1" }),
  address: z.string().min(1, { message: "Please provide your address!" }),
  city: z.string().min(1, { message: "City is required!" }),
  postalCode: z.string().min(1, { message: "Postal code is required!" }),
  phoneNumber: z.string().min(1, { message: "Phone is required!" }),
});

type PersonalInfo = z.infer<typeof PersonalInfoSchema>;

export default function PersonalDetailsForm() {
  const methods = useForm<PersonalInfo>({
    resolver: zodResolver(PersonalInfoSchema),
  });

  const onNext: SubmitHandler<PersonalInfo> = (data) => {
    console.log(data, typeof data);
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
