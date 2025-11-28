import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: var(--font-nunito);
  }

  body {
    background-color: ${({ theme }) => theme.colors.gray10};
    transition: 200ms;

    margin: 0 24px;
    height: 100%;
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    max-width: 1100px;
  }

  main {
    margin-bottom: 24px;
    flex: 1;
  }

  a {
    text-decoration: none;
    transition: 200ms;
    :visited {
      color: none;
    }
  }


  @media screen and (min-width: 1124px) {
    body {
      margin: 0 auto;
    }
  }
`;

export default GlobalStyles;
