import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import ReduxProvider from "@/providers/reduxProvider";
import userEvent from "@testing-library/user-event";
import Home from "./page";

describe("Home", () => {
  it("inscreve o usuário com sucesso", async () => {
    render(
      <ReduxProvider>
        <ThemeProvider theme={theme}>
          <Home />
        </ThemeProvider>
      </ReduxProvider>
    );

    const nameInput = screen.getByLabelText(/nome/i);
    const emailInput = screen.getByLabelText(/e-mail/i);
    const btn = screen.getByRole("button", { name: /enviar/i });

    await userEvent.type(nameInput, "Pedro");
    await userEvent.type(emailInput, "pedro@example.com");

    await userEvent.click(btn);

    expect(
      screen.getByText(/Inscrição realizada com sucesso!/i)
    ).toBeInTheDocument();
  });

  it("volta ao estado inicial da aplicação", async () => {
    render(
      <ReduxProvider>
        <ThemeProvider theme={theme}>
          <Home />
        </ThemeProvider>
      </ReduxProvider>
    );

    const btn = screen.getByRole("button", { name: /voltar/i });
    await userEvent.click(btn);

    expect(screen.getByLabelText(/nome/i)).toHaveValue("");
    expect(screen.getByLabelText(/e-mail/i)).toHaveValue("");
  });
});
