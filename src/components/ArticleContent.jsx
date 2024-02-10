import styled from "styled-components";

const ArticleContent = ({ content }) => {
  return <Paragraph>{content}</Paragraph>;
};

export default ArticleContent;

const Paragraph = styled.p`
  font-size: 14px;
  font-weight: 300;
  margin-top: 5px;
  margin-bottom: 10px;
  text-align: justify;
`;
