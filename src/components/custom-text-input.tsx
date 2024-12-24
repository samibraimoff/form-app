import {
  TextInput,
  StyleSheet,
  View,
  Text,
  StyleProp,
  ViewStyle,
} from "react-native";
import { ComponentProps } from "react";
import { useController } from "react-hook-form";

type CustomTextInputProps = {
  label?: string;
  containerStyle?: StyleProp<ViewStyle>;
  name: string;
} & ComponentProps<typeof TextInput>;

export default function CustomTextInput({
  label,
  containerStyle,
  name,
  ...textInputProps
}: CustomTextInputProps) {
  const {
    field: { value, onBlur, onChange },
    fieldState: { error },
  } = useController({ name, rules: { required: `${name} is required` } });
  return (
    <View style={containerStyle}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        {...textInputProps}
        value={value}
        onChangeText={onChange}
        onBlur={onBlur}
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
}

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
