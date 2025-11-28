"use client";

import GlobalStyles from "@/styles/globalStyles";
import { darkTheme, theme } from "@/styles/theme";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const MyThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default MyThemeProvider;
