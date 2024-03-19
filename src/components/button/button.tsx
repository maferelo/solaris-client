import {
  Button as RNEButton,
  ButtonProps as RNEButtonProps,
} from "@rneui/themed";

const variants = {
  clear: {},
  outline: {},
  solid: {},
};

export interface ButtonProps extends RNEButtonProps {
  variant?: keyof typeof variants;
}

export const Button = ({ variant = "solid", ...props }: ButtonProps) => {
  return <RNEButton {...props} {...variants[variant]} />;
};
