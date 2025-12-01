import { render, screen } from "@testing-library/react";
import ReduxProvider from "@/providers/reduxProvider";
import userEvent from "@testing-library/user-event";

import Form from ".";

import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";

describe("Form", () => {
  it("renderiza o formulário com os campos corretos", () => {
    render(
      <ReduxProvider>
        <ThemeProvider theme={theme}>
          <Form />
        </ThemeProvider>
      </ReduxProvider>
    );

    expect(screen.getByText(/Nome/i)).toBeInTheDocument();
    expect(screen.getByText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByText(/Enviar/i)).toBeInTheDocument();
  });

  it("clicar no botão antes de preencher os campos", async () => {
    render(
      <ReduxProvider>
        <ThemeProvider theme={theme}>
          <Form />
        </ThemeProvider>
      </ReduxProvider>
    );

    const btn = screen.getByRole("button", { name: /Enviar/i });
    const nameInput = screen.getByLabelText(/nome/i);
    const emailInput = screen.getByLabelText(/e-mail/i);

    await userEvent.click(btn);

    expect(
      screen.getByText(/O campo 'Nome' é obrigatório./i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/O campo 'E-mail' é obrigatório./i)
    ).toBeInTheDocument();

    expect(nameInput).toBeInvalid();
    expect(emailInput).toBeInvalid();
  });

  it("preenche nome e clica no botão", async () => {
    render(
      <ReduxProvider>
        <ThemeProvider theme={theme}>
          <Form />
        </ThemeProvider>
      </ReduxProvider>
    );

    const btn = screen.getByRole("button", { name: /Enviar/i });
    const nameInput = screen.getByLabelText(/nome/i);

    await userEvent.type(nameInput, "Pedro");
    await userEvent.click(btn);

    expect(nameInput).toBeValid();
    expect(
      screen.getByText(/O campo 'E-mail' é obrigatório./i)
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/e-mail/i)).toBeInvalid();
  });

  it("preenche com nome inválido e clica no botão", async () => {
    render(
      <ReduxProvider>
        <ThemeProvider theme={theme}>
          <Form />
        </ThemeProvider>
      </ReduxProvider>
    );

    const btn = screen.getByRole("button", { name: /Enviar/i });
    const nameInput = screen.getByLabelText(/nome/i);

    await userEvent.type(nameInput, "pe");
    await userEvent.click(btn);

    expect(nameInput).toBeInvalid();
    expect(
      screen.getByText(/O nome deve ter no mínimo 3 caracteres./i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/O campo 'E-mail' é obrigatório./i)
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/e-mail/i)).toBeInvalid();
  });

  it("preenche com e-mail inválido e clica no botão", async () => {
    render(
      <ReduxProvider>
        <ThemeProvider theme={theme}>
          <Form />
        </ThemeProvider>
      </ReduxProvider>
    );

    const btn = screen.getByRole("button", { name: /Enviar/i });
    const nameInput = screen.getByLabelText(/nome/i);
    const emailInput = screen.getByLabelText(/e-mail/i);

    await userEvent.type(nameInput, "Pedro");
    await userEvent.type(emailInput, "Pedro");
    await userEvent.click(btn);

    expect(nameInput).toBeValid();
    expect(emailInput).toBeInvalid();
    expect(
      screen.getByText(/Por favor digite um e-mail válido/i)
    ).toBeInTheDocument();
  });

  it("não encontrar erros ao preencher os campos corretamente", async () => {
    render(
      <ReduxProvider>
        <ThemeProvider theme={theme}>
          <Form />
        </ThemeProvider>
      </ReduxProvider>
    );

    const nameInput = screen.getByLabelText(/nome/i);
    const emailInput = screen.getByLabelText(/e-mail/i);

    await userEvent.type(nameInput, "Pedro");
    await userEvent.type(emailInput, "pedro@example.com");

    expect(nameInput).toHaveValue("Pedro");
    expect(emailInput).toHaveValue("pedro@example.com");

    expect(nameInput).toBeValid();
    expect(emailInput).toBeValid();
  });
});
