import StyledPageTitle from "./style";

type PageTitleProps = {
  children: React.ReactNode;
};

const PageTitle = ({ children }: PageTitleProps) => {
  return <StyledPageTitle>{children}</StyledPageTitle>;
};

export default PageTitle;
