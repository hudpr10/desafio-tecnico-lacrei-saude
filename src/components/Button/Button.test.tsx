import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Button from ".";

import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";

describe("Button", () => {
  it("renderiza o botão com texto 'Teste'", () => {
    render(
      <ThemeProvider theme={theme}>
        <Button>Teste</Button>
      </ThemeProvider>
    );
    expect(screen.getByText(/Teste/i)).toBeInTheDocument();
  });

  it("executa uma determinada função ao clicar no botão", async () => {
    const handleClick = jest.fn();

    render(
      <ThemeProvider theme={theme}>
        <Button handleClick={() => handleClick()}>Teste</Button>
      </ThemeProvider>
    );

    const btn = screen.getByText(/Teste/i);
    await userEvent.click(btn);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("não executa função ao clicar no botão quando estiver desativado", async () => {
    const handleClick = jest.fn();

    render(
      <ThemeProvider theme={theme}>
        <Button handleClick={() => handleClick()} disabled={true}>
          Teste
        </Button>
      </ThemeProvider>
    );

    const btn = screen.getByText(/Teste/i);
    await userEvent.click(btn);

    expect(handleClick).toHaveBeenCalledTimes(0);
  });

  it("renderiza com o estilo 'ghost'", () => {
    render(
      <ThemeProvider theme={theme}>
        <Button $style="ghost">Teste</Button>
      </ThemeProvider>
    );

    const btn = screen.getByText(/Teste/i);
    expect(btn).toHaveStyle("background-color: rgba(0, 0, 0, 0);");
    expect(btn).toHaveStyle(`color: ${theme.colors.emerald40}`);
  });

  it("renderiza com o estilo 'primary'", () => {
    render(
      <ThemeProvider theme={theme}>
        <Button>Teste</Button>
      </ThemeProvider>
    );

    const btn = screen.getByText(/Teste/i);
    expect(btn).toHaveStyle(`background-color: ${theme.colors.emerald40}`);
    expect(btn).toHaveStyle(`color: ${theme.colors.gray10}`);
  });

  it("renderiza com o estilo 'disabled'", () => {
    render(
      <ThemeProvider theme={theme}>
        <Button disabled={true}>Teste</Button>
      </ThemeProvider>
    );

    const btn = screen.getByText(/Teste/i);
    expect(btn).toHaveStyle(`background-color: ${theme.colors.gray30}`);
    expect(btn).toHaveStyle(`color: ${theme.colors.gray60};`);
  });
});
