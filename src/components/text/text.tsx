import { Text as RNEText, TextProps as RNETextProps } from "@rneui/themed";

const variants = {
  solid: {},
  outline: {},
  clear: {},
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
