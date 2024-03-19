import { Text as RNEText, TextProps as RNETextProps } from "@rneui/themed";

const variants = {
  clear: {},
  outline: {},
  solid: {},
};

export interface TextFieldProps extends RNETextProps {
  children: React.ReactNode;
  variant?: keyof typeof variants;
}

export const Text = ({
  children,
  variant = "solid",
  ...props
}: TextFieldProps) => {
  return (
    <RNEText {...props} {...variants[variant]}>
      {children}
    </RNEText>
  );
};
