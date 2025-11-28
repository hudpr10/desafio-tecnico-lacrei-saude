import styled from "styled-components";

const StyledPageTitle = styled.h2`
  color: ${({ theme }) => theme.colors.emerald40};
  margin-bottom: 16px;

  @media screen and (min-width: 481px) {
    font-size: 2.3rem;
  }
`;

export default StyledPageTitle;
