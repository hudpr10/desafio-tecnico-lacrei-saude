import styled from "styled-components";

const StyledHome = styled.main`
  .hero-section {
    margin-bottom: 1.5rem;
  }

  p {
    background-color: ${({ theme }) => theme.colors.gray10};
    color: ${({ theme }) => theme.colors.gray70};
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 400;
    padding: 1.5rem;
    border-radius: ${({ theme }) => theme.borderRadius.md};
  }

  p strong {
    color: ${({ theme }) => theme.colors.gray70};
    font-weight: 700;
  }

  .user-section {
    display: flex;
    flex-direction: column;
    gap: 16px;

    box-shadow: ${({ theme }) => theme.shadow};
    padding: 1rem;
    border-radius: ${({ theme }) => theme.borderRadius.md};
    margin: 0 24px;

    h3 {
      color: ${({ theme }) => theme.colors.gray80};
      font-size: 1.75rem;
    }

    p {
      padding-left: 16px;
      border-left: 2px solid ${({ theme }) => theme.colors.emerald40};
      border-radius: 0;
    }
  }

  .form-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .image {
    display: none;
  }

  @media screen and (min-width: 481px) {
    p {
      background-color: transparent;
      padding: 0;
      font-size: 1.25rem;
      line-height: 2rem;
    }
  }

  @media screen and (min-width: 1124px) {
    .image {
      display: block;
    }
  }
`;

export default StyledHome;
