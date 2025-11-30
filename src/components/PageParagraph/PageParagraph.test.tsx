import { render, screen } from "@testing-library/react";

import PageParagraph from ".";

import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";

describe("PageParagraph", () => {
  it("renderiza um parágrafo na página", () => {
    render(
      <ThemeProvider theme={theme}>
        <PageParagraph>Teste</PageParagraph>
      </ThemeProvider>
    );

    expect(screen.getByText(/Teste/i)).toBeInTheDocument();
  });

  it("verifica estilos do parágrafo", () => {
    render(
      <ThemeProvider theme={theme}>
        <PageParagraph>Teste</PageParagraph>
      </ThemeProvider>
    );

    const p = screen.getByText(/teste/i);

    expect(p).toHaveStyle(`font-size: 1rem;`);
    expect(p).toHaveStyle(`color: ${theme.colors.gray70};`);
  });
});
