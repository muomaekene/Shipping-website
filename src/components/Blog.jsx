import ArticleImage from "./ArticleImage";
import ArticleTitle from "./ArticleTitle";
import ArticleContent from "./ArticleContent";

import { ArrowRightIcon } from "lucide-react";
import { devices } from "../utils/breakpoints";

import styled from "styled-components";

const Blog = ({ image, imageAlt, title, content }) => {
  return (
    <Article>
      <ArticleImage imgSrc={image} imgAlt={imageAlt} />
      <div className="article-body">
        <ArticleTitle title={title} />
        <ArticleContent content={content} />
        <button>
          Read More <ArrowRightIcon strokeWidth="1.2" size="20" />
        </button>
      </div>
    </Article>
  );
};

export default Blog;

const Article = styled.article`
  margin-bottom: 20px;
  border-radius: 4px;
  background: #fff;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

  @media ${devices.tablet} {
    margin-bottom: 0;
  }

  .article-body {
    padding: 20px;
  }

  button {
    color: #4a4aed;
    font-size: 16px;
    cursor: pointer;
    background: none;
    width: fit-content;
    display: flex;
    margin-top: 10px;
    border: 1px solid #bcb8b8;
    border-radius: 4px;
    padding: 12px 15px;

    @media ${devices.laptop} {
      font-size: 17px;
      padding: 14px 18px;
    }

    @media ${devices.laptopL} {
      font-size: 18px;
      padding: 16px 20px;
    }

    &:active {
      background: #efeeee;
    }
  }
`;
