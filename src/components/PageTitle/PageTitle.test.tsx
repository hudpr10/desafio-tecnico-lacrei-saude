import { render, screen } from "@testing-library/react";

import PageTitle from ".";

import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";

describe("PageTitle", () => {
  it("renderiza um título na página", () => {
    render(
      <ThemeProvider theme={theme}>
        <PageTitle>Teste</PageTitle>
      </ThemeProvider>
    );

    expect(screen.getByText(/Teste/i)).toBeInTheDocument();
  });

  it("verifica cor do título", () => {
    render(
      <ThemeProvider theme={theme}>
        <PageTitle>Teste</PageTitle>
      </ThemeProvider>
    );

    const h2 = screen.getByText(/teste/i);

    expect(h2).toHaveStyle(`color: ${theme.colors.emerald40};`);
  });
});
