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
  height: 17rem;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;

  img {
    margin-bottom: 20px;
  }
`;
