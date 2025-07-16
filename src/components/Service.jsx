import ArticleTitle from "./ArticleTitle";
import ArticleContent from "./ArticleContent";

import styled from "styled-components";

const Service = ({ imgSrc, imgAlt, title, content }) => {
  return (
    <Article>
      <img src={imgSrc} width="70" height="70" alt={imgAlt} />
      <ArticleTitle>{title}</ArticleTitle>
      <ArticleContent>{content}</ArticleContent>
    </Article>
  );
};

export default Service;

const Article = styled.article`
  border-radius: 6px;
  padding: 20px;
  height: 20rem;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

  img {
    margin-bottom: 20px;
  }
`;
