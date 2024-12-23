import {
  TextInput,
  StyleSheet,
  View,
  Text,
  StyleProp,
  ViewStyle,
} from "react-native";
import { ComponentProps } from "react";

type CustomTextInputProps = {
  label?: string;
  containerStyle?: StyleProp<ViewStyle>;
} & ComponentProps<typeof TextInput>;

const CustomTextInput = ({
  label,
  containerStyle,
  ...textInputProps
}: CustomTextInputProps) => {
  const error = undefined;
  return (
    <View style={containerStyle}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        {...textInputProps}
        style={[
          styles.input,
          textInputProps.style,
          error ? styles.errorInput : {},
        ]}
      />
      {error && (
        <Text style={styles.error} numberOfLines={1}>
          {error?.message}
        </Text>
      )}
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "grainsboro",
    borderRadius: 5,
    padding: 10,
    marginTop: 4,
    marginBottom: 2,
  },
  errorInput: {
    borderColor: "crimson",
  },
  label: {
    fontWeight: 600,
    color: "dimgray",
  },
  error: {
    color: "crimson",
    height: 17,
  },
});
