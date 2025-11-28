import styled from "styled-components";

const InputStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.gray70};
  }

  input {
    padding: 0 8px;
    height: 48px;
    border: 1px solid ${({ theme }) => theme.colors.gray80};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    color: ${({ theme }) => theme.colors.gray80};
    background-color: transparent;
    outline: none;

    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
  }

  input:focus {
    border: 1px solid ${({ theme }) => theme.colors.blue50};
  }

  span {
    font-size: 0.75rem;
    padding-left: 16px;
    color: ${({ theme }) => theme.colors.red60};
  }
`;

export default InputStyled;
