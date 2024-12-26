import { Pressable, Text, StyleSheet, View } from "react-native";
import { ComponentProps, ReactNode } from "react";
import { forwardRef } from "react";

export interface CustomButtonProps extends ComponentProps<typeof Pressable> {
  title: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const CustomButton = forwardRef<View, CustomButtonProps>(
  ({ title, leftIcon, rightIcon, ...pressableProps }, ref) => {
    return (
      <Pressable {...pressableProps} style={styles.buttonContainer} ref={ref}>
        {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}
        <Text style={styles.title}>{title}</Text>
        {rightIcon && <View style={styles.rightIcon}>{rightIcon}</View>}
      </Pressable>
    );
  },
);

export default CustomButton;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#005055",
    padding: 20,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  title: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 14,
  },
  rightIcon: {
    position: "absolute",
    right: 20,
  },
  leftIcon: {
    position: "absolute",
    left: 20,
  },
});
