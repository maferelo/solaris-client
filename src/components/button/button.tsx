import {
  Button as RNEButton,
  ButtonProps as RNEButtonProps,
} from "@rneui/themed";

const variants = {
  solid: {},
  outline: {},
  clear: {},
};

export interface ButtonProps extends RNEButtonProps {
  variant?: keyof typeof variants;
}

export const Button = ({ variant = "solid", ...props }: ButtonProps) => {
  return <RNEButton {...props} {...variants[variant]} />;
};
