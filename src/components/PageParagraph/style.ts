import styled from "styled-components";

const StyledPageParagraph = styled.p`
  background-color: ${({ theme }) => theme.colors.gray10};
  color: ${({ theme }) => theme.colors.gray70};
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
  padding: 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.md};

  strong {
    color: ${({ theme }) => theme.colors.gray70};
    font-weight: 700;
  }

  @media screen and (min-width: 481px) {
    background-color: transparent;
    padding: 0;
    font-size: 1.25rem;
    line-height: 2rem;
  }
`;

export default StyledPageParagraph;
