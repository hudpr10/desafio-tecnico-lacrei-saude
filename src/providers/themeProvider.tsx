"use client";

import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

import { RootState } from "../store";
import GlobalStyles from "@/styles/globalStyles";
import { darkTheme, theme } from "@/styles/theme";

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
