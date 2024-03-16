import { Input as RNEInput, InputProps as RNEInputProps } from "@rneui/themed";

const variants = {
  solid: {},
  outline: {},
  clear: {},
};

export interface InputFieldProps extends RNEInputProps {
  variant?: keyof typeof variants;
}

export const InputField = ({
  variant = "solid",
  ...props
}: InputFieldProps) => {
  return <RNEInput {...props} {...variants[variant]} />;
};
