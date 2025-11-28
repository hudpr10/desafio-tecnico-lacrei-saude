import styled from "styled-components";

const StyledNotFound = styled.main`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;

  h1 {
    text-align: center;
    color: ${({ theme }) => theme.colors.gray80};
  }

  a {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.gray70};
  }
`;

export default StyledNotFound;
