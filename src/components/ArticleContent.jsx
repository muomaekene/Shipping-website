import styled from "styled-components";

const ArticleContent = ({ children }) => {
  return <Paragraph>{children}</Paragraph>;
};

export default ArticleContent;

const Paragraph = styled.p`
  font-size: clamp(1rem, 1rem + 0.5vw, 1.35rem);
  color: #2d3054;
  margin-top: 5px;
  line-height: 1.5;
`;
