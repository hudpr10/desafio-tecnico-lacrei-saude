import { render, screen } from "@testing-library/react";

import Footer from ".";

import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";

describe("Footer", () => {
  it("renderiza o texto final", () => {
    render(
      <ThemeProvider theme={theme}>
        <Footer />
      </ThemeProvider>
    );
    expect(
      screen.getByText(/Desenvolvido por Hudson - 2025/i)
    ).toBeInTheDocument();
  });

  it("possui link para o LinkedIn com aria-label correto", () => {
    render(
      <ThemeProvider theme={theme}>
        <Footer />
      </ThemeProvider>
    );
    const link = screen.getByLabelText(/Abrir perfil no LinkedIn/i);
    expect(link).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/hudson-proque-reis/"
    );
    expect(link).toHaveAttribute("target", "_blank");
  });
});
