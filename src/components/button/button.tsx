import { Button as RNEButton } from "@rneui/themed";

const variants = {
  clear: {},
  outline: {},
  solid: {},
};

export type ButtonProps = {
  title: string;
  variant?: keyof typeof variants;
  onPress?: () => void;
};

export const Button = ({ variant = "solid", ...props }: ButtonProps) => {
  return <RNEButton {...props} {...variants[variant]} />;
};
