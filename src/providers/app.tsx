import { ThemeProvider } from "@rneui/themed";
import { ReactNode } from "react";

import { theme } from "@/config/theme";

type AppProviderProps = {
  children: ReactNode;
};
export const AppProvider = ({ children }: AppProviderProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
