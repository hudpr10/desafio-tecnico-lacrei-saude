import StyledPageParagraph from "./style";

type PageParagraphProps = {
  children: React.ReactNode;
};

const PageParagraph = ({ children }: PageParagraphProps) => {
  return <StyledPageParagraph>{children}</StyledPageParagraph>;
};

export default PageParagraph;
