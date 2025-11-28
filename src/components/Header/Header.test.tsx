import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import ReduxProvider from "@/providers/reduxProvider";
import userEvent from "@testing-library/user-event";
import Header from ".";

describe("Home", () => {
  it("renderiza o header corretamente", () => {
    render(
      <ReduxProvider>
        <ThemeProvider theme={theme}>
          <Header />
        </ThemeProvider>
      </ReduxProvider>
    );

    expect(screen.getByText(/Lacrei Saúde/i)).toBeInTheDocument();

    expect(screen.getByRole("button", { name: /Ajuda/i }));
    expect(screen.getByRole("button", { name: /Modo Escuro/i }));
  });

  it("altera para o modo escuro", async () => {
    render(
      <ReduxProvider>
        <ThemeProvider theme={theme}>
          <Header />
        </ThemeProvider>
      </ReduxProvider>
    );

    const btn = screen.getByRole("button", { name: /Modo Escuro/i });
    await userEvent.click(btn);

    expect(screen.getByRole("button", { name: /Modo Claro/i }));
  });

  it("altera para o modo claro", async () => {
    render(
      <ReduxProvider>
        <ThemeProvider theme={theme}>
          <Header />
        </ThemeProvider>
      </ReduxProvider>
    );

    const btn = screen.getByRole("button", { name: /Modo Claro/i });
    await userEvent.click(btn);

    expect(screen.getByRole("button", { name: /Modo Escuro/i }));
  });
});
