import styled from "styled-components";
import { ButtonProps } from ".";

type StyleProps = {
  $style: ButtonProps["$style"];
};

const StyledButton = styled.button<StyleProps>`
  height: 48px;
  min-width: 48px;
  cursor: pointer;
  border: 2px solid transparent;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  transition: 200ms;
  color: #fff;
  font-size: 1.125rem;
  font-weight: 700;
  white-space: nowrap;

  display: flex;
  align-items: center;
  justify-content: center;

  ${({ $style, theme }) => {
    switch ($style) {
      case "ghost":
        // Comportamento do botão ghost
        return {
          backgroundColor: "transparent",
          color: theme.colors.emerald40,
        };
      default: {
        // Comportamento do botão principal
        return {
          backgroundColor: theme.colors.emerald40,
          boxShadow: theme.shadow,
        };
      }
    }
  }}

  &:hover {
    ${({ $style, theme }) => {
      switch ($style) {
        // Comportamento do botão ghost
        case "ghost":
          return {
            backgroundColor: theme.colors.emerald10,
          };

        default: {
          // Comportamento do botão principal
          return {
            backgroundColor: theme.colors.emerald70,
          };
        }
      }
    }}
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray30};
    color: ${({ theme }) => theme.colors.gray60};
    box-shadow: none;
    cursor: auto;
  }

  &:active {
    ${({ $style, theme }) => {
      switch ($style) {
        case "ghost":
          return {
            backgroundColor: theme.colors.emerald20,
          };
        default: {
          return {
            backgroundColor: theme.colors.emerald80,
          };
        }
      }
    }}
  }

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.blue50};
    outline-offset: 4px;
  }
`;

export default StyledButton;
