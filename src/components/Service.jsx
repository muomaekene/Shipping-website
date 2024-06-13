import ArticleTitle from "./ArticleTitle";
import ArticleContent from "./ArticleContent";

import styled from "styled-components";

const Service = ({ imgSrc, imgAlt, title, content }) => {
  return (
    <Article>
      <img src={imgSrc} width="70" height="70" alt={imgAlt} />
      <ArticleTitle title={title} />
      <ArticleContent content={content} />
    </Article>
  );
};

export default Service;

const Article = styled.article`
  border-radius: 4px;
  padding: 0 20px;
  margin-top: 20px;
  height: 17rem;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

  img {
    margin-bottom: 20px;
  }
`;
