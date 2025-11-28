import styled from "styled-components";

const StyledFooter = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.colors.emerald20};
  padding-top: 24px;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  margin: 24px 0;

  ul {
    list-style: none;

    display: flex;
    gap: 8px;
    margin: 16px 0;
  }

  p {
    color: ${({ theme }) => theme.colors.gray80};
  }
`;

export default StyledFooter;
