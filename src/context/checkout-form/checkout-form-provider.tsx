import { router } from "expo-router";
import { createContext, PropsWithChildren, useContext, useState } from "react";
import * as z from "zod";

export const PersonalInfoSchema = z.object({
  fullName: z
    .string({ message: "Full name is required!" })
    .min(1, { message: "Full name must be longer than 1" }),
  address: z.string().min(1, { message: "Please provide your address!" }),
  city: z.string().min(1, { message: "City is required!" }),
  postalCode: z.string().min(1, { message: "Postal code is required!" }),
  country: z.string().min(1, { message: "Country is required!" }),
  phoneNumber: z.string().min(1, { message: "Phone is required!" }),
});

export type PersonalInfo = z.infer<typeof PersonalInfoSchema>;

export const PaymentInfoSchema = z.object({
  cardNumber: z.string({ message: "Card number is required." }).min(1),
  expiry: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, {
      message: "Date must be in MM/YY format",
    })
    .min(1),
  cvv: z.coerce.number().min(100).max(999),
});

export type PaymentInfo = z.infer<typeof PaymentInfoSchema>;

type CheckoutFormContext = {
  personalInfo: PersonalInfo | undefined;
  setPersonalInfo: (data: PersonalInfo) => void;
  paymentInfo: PaymentInfo | undefined;
  setPaymentInfo: (data: PaymentInfo) => void;
  onSubmit: () => void;
};

const CheckoutFormContext = createContext<CheckoutFormContext>({
  personalInfo: undefined,
  setPersonalInfo: () => {},
  paymentInfo: undefined,
  setPaymentInfo: () => {},
  onSubmit: () => {},
});

export default function CheckoutFormProvider({ children }: PropsWithChildren) {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo | undefined>();
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo | undefined>();

  const onSubmit = () => {
    setPersonalInfo(undefined);
    setPaymentInfo(undefined);
    router.dismissAll();
    router.back();
  };

  return (
    <CheckoutFormContext.Provider
      value={{
        personalInfo,
        setPersonalInfo,
        paymentInfo,
        setPaymentInfo,
        onSubmit,
      }}
    >
      {children}
    </CheckoutFormContext.Provider>
  );
}

export const useCheckoutForm = () => useContext(CheckoutFormContext);
