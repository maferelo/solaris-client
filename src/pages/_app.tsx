import { ReactNode } from "react";

import { AppProvider } from "@/providers/app";

export type AppProps = {
  children: ReactNode;
};
export const App = ({ children }: AppProps) => {
  return <AppProvider>{children}</AppProvider>;
};
