import { render, screen } from "@testing-library/react";
import { UseFormRegister } from "react-hook-form";

import Input from ".";

import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";

// Criando Mock do *register*
const mockRegister = jest.fn().mockImplementation((name: string) => ({
  name,
  onChange: jest.fn(),
  onBlur: jest.fn(),
  ref: jest.fn(),
}));

// Forçando tipos
const register = mockRegister as unknown as UseFormRegister<{
  name: string;
  email: string;
}>;
// ---------------------------------------------------------------------

describe("Input", () => {
  it("renderiza o input vazio com a label 'Teste' e placeholder 'Digite...'", () => {
    render(
      <ThemeProvider theme={theme}>
        <Input
          label="Teste"
          placeholder="Digite..."
          register={register}
          name="name"
        />
      </ThemeProvider>
    );

    const input = screen.getByLabelText(/Teste/i);

    expect(screen.getByText(/Teste/i)).toBeInTheDocument();
    expect(input).toHaveValue("");
    expect(input).toHaveAttribute("placeholder", "Digite...");
    expect(input).toHaveAttribute("aria-invalid", "false");
  });

  it("renderiza o input com mensagem de erro - verifica mensagem de erro", () => {
    render(
      <ThemeProvider theme={theme}>
        <Input
          label="Teste"
          placeholder="Digite..."
          register={register}
          name="name"
          error="erro"
        />
      </ThemeProvider>
    );

    const errorMessage = screen.getByText(/erro/i);

    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveStyle(`color: ${theme.colors.red60}`);
    expect(errorMessage).toHaveAttribute("role", "alert");
  });

  it("renderiza o input com mensagem de erro - verifica o input", () => {
    render(
      <ThemeProvider theme={theme}>
        <Input
          label="Teste"
          placeholder="Digite..."
          register={register}
          name="name"
          error="erro"
        />
      </ThemeProvider>
    );

    const input = screen.getByLabelText(/teste/i);

    expect(input).toHaveAttribute("aria-describedby", "erro");
    expect(input).toHaveAttribute("aria-invalid", "true");
  });
});
