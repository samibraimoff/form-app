import { StyleSheet, View } from "react-native";
import CustomButton from "../../components/custom-button";
import CustomTextInput from "../../components/custom-text-input";
import { router } from "expo-router";
import KeyboardAwareScrollView from "../../components/keyboard-aware-scroll-view";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const PaymentInfoSchema = z.object({
  cardNumber: z.string({ message: "Card number is required." }).min(1),
  expiry: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, {
      message: "Date must be in MM/YY format",
    })
    .min(1),
  cvv: z.coerce.number().min(100).max(999),
});

type PaymentInfo = z.infer<typeof PaymentInfoSchema>;

export default function PaymentDetailsForm() {
  const methods = useForm<PaymentInfo>({
    resolver: zodResolver(PaymentInfoSchema),
  });
  const onNext: SubmitHandler<PaymentInfo> = (data) => {
    router.push("/checkout/confirm");
  };

  return (
    <KeyboardAwareScrollView>
      <FormProvider {...methods}>
        <CustomTextInput
          name="cardNumber"
          label={"Card number"}
          placeholder={"1111 2222 3333 4444"}
        />
        <View style={{ flexDirection: "row", gap: 5 }}>
          <CustomTextInput
            name="expiry"
            label={"Expiration date"}
            placeholder={"MM / YY"}
            containerStyle={{ flex: 1 }}
          />
          <CustomTextInput
            name="cvv"
            label={"Secure code"}
            placeholder={"1234"}
            containerStyle={{ flex: 1 }}
            inputMode="numeric"
          />
        </View>
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
    flex: 1,
    padding: 10,
  },
  button: {
    marginTop: "auto",
  },
});
