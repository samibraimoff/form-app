import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useSegments } from "expo-router";

const steps = [
  {
    key: "personal",
    title: "Personal",
  },
  {
    key: "payment",
    title: "Payment",
  },
  {
    key: "confirm",
    title: "Confirm",
  },
];

export default function CheckoutFormStepIndicator() {
  const segments = useSegments();
  const currentScreen = segments[segments.length - 1];
  const stepIndex = steps.findIndex((step) => step.key === currentScreen);

  return (
    <SafeAreaView
      edges={["top"]}
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        height: 110,
        gap: 15,
      }}
    >
      {steps.map((step, index) => (
        <View
          key={step.key}
          style={{
            borderBottomWidth: 3,
            borderColor: stepIndex >= index ? "#005055" : "lightgray",
            padding: 5,
            flex: 1,
          }}
        >
          <Link
            href={`/checkout/${step.key}`}
            style={{
              color: stepIndex >= index ? "#005055" : "gray",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {step.title}
          </Link>
        </View>
      ))}
    </SafeAreaView>
  );
}
