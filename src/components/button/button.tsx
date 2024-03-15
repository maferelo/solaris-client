import { Button as RNUIButton } from "@rneui/themed";
import { MouseEventHandler, ReactNode } from "react";

const variants = {
  solid: {},
  outline: {},
  clear: {},
};

export type ButtonProps = {
  children: ReactNode;
  variant?: keyof typeof variants;
  isLoading?: boolean;
  isDisabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  icon?: JSX.Element;
};

export const Button = ({
  variant = "solid",
  children,
  ...props
}: ButtonProps) => {
  return (
    <RNUIButton {...props} {...variants[variant]} title={variant}>
      {children}
    </RNUIButton>
  );
};
