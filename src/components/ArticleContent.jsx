import styled from "styled-components";

const ArticleContent = ({ children }) => {
  return <Paragraph>{children}</Paragraph>;
};

export default ArticleContent;

const Paragraph = styled.p`
  font-size: clamp(1.125rem, 1.05rem + 0.5vw, 1.375rem);
  color: #2d3054;
  margin-top: 5px;
  line-height: 1.5;
`;
