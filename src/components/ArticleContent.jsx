import styled from "styled-components";

const ArticleContent = ({ children }) => {
  return <Paragraph>{children}</Paragraph>;
};

export default ArticleContent;

const Paragraph = styled.p`
  font-size: 20px;
  color: #2d3054;
  margin-top: 10px;
  line-height: 1.5;
`;
