import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Header from ".";

import ReduxProvider from "@/providers/reduxProvider";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";

describe("Home", () => {
  it("renderiza o header corretamente", () => {
    render(
      <ReduxProvider>
        <ThemeProvider theme={theme}>
          <Header />
        </ThemeProvider>
      </ReduxProvider>
    );

    // h1
    expect(screen.getByText(/Lacrei Saúde/i)).toBeInTheDocument();

    // botões de ajuda
    expect(screen.getByTestId("help-text")).toBeInTheDocument();
    expect(screen.getByTestId("help-icon")).toBeInTheDocument();

    // botões de tema
    expect(screen.getByTestId("theme-text")).toBeInTheDocument();
    expect(screen.getByTestId("theme-icon")).toBeInTheDocument();
  });

  it("altera para o modo escuro e claro, clica no botão com texto", async () => {
    render(
      <ReduxProvider>
        <ThemeProvider theme={theme}>
          <Header />
        </ThemeProvider>
      </ReduxProvider>
    );

    const btn = screen.getByTestId("theme-text");
    await userEvent.click(btn);

    expect(btn).toHaveTextContent("Modo Claro");
    expect(btn).toHaveAttribute("aria-pressed", "true");

    await userEvent.click(btn);
    expect(btn).toHaveTextContent("Modo Escuro");
    expect(btn).toHaveAttribute("aria-pressed", "false");
  });

  it("altera para o modo escuro e claro, clica no botão com ícone", async () => {
    render(
      <ReduxProvider>
        <ThemeProvider theme={theme}>
          <Header />
        </ThemeProvider>
      </ReduxProvider>
    );

    const btn = screen.getByTestId("theme-icon");
    await userEvent.click(btn);

    expect(btn).toHaveAttribute("aria-label", "Modo Claro");
    expect(btn).toHaveAttribute("aria-pressed", "true");

    await userEvent.click(btn);
    expect(btn).toHaveAttribute("aria-label", "Modo Escuro");
    expect(btn).toHaveAttribute("aria-pressed", "false");
  });

  it("verifica os links de navegação", () => {
    render(
      <ReduxProvider>
        <ThemeProvider theme={theme}>
          <Header />
        </ThemeProvider>
      </ReduxProvider>
    );

    const linkHome = screen.getByRole("link", { name: /Lacrei Saúde/i });
    expect(linkHome).toHaveAttribute("href", "/");

    const helpIcon = screen.getByTestId("help-icon");
    expect(helpIcon).toHaveAttribute("href", "/help");

    const helpText = screen.getByTestId("help-text");
    expect(helpText).toHaveAttribute("href", "/help");
  });
});
