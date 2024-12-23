import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PropsWithChildren } from "react";

const KeyboardAwareScrollView = ({ children }: PropsWithChildren) => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "white" }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={20}
    >
      <ScrollView
        style={{ backgroundColor: "white" }}
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: "white",
          padding: 10,
          gap: 5,
        }}
        keyboardShouldPersistTaps={"handled"}
      >
        <SafeAreaView style={{ flex: 1 }} edges={["bottom"]}>
          {children}
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default KeyboardAwareScrollView;