import styled from "styled-components";

const ArticleContent = ({ children }) => {
  return <Paragraph>{children}</Paragraph>;
};

export default ArticleContent;

const Paragraph = styled.p`
  font-size: 18px;
  color: #484a64;
`;
