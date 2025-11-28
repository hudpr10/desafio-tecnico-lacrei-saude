"use client";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 24px 0;

  h1 {
    color: ${({ theme }) => theme.colors.emerald40};
    font-size: 1.5rem;
    cursor: pointer;
    height: 48px;
    line-height: 48px;
    white-space: nowrap;
  }

  nav {
    display: flex;
    gap: 24px;
  }

  .nav-text {
    display: none;
  }

  @media screen and (min-width: 600px) {
    .nav-text {
      display: flex;
    }

    .nav-icon {
      display: none;
    }
  }
`;

export default StyledHeader;
