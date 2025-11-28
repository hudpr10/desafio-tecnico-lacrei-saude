import StyledPageTitle from "./style";

const PageTitle = ({ children }: { children: React.ReactNode }) => {
  return <StyledPageTitle>{children}</StyledPageTitle>;
};

export default PageTitle;
