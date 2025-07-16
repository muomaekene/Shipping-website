import { Link } from "react-router-dom";

import ArticleImage from "./ArticleImage";
import ArticleTitle from "./ArticleTitle";
import ArticleContent from "./ArticleContent";

import { ArrowRightIcon } from "lucide-react";

import { devices } from "../utils/breakpoints";
import styled from "styled-components";

const Blog = ({ image, imageAlt, title, content, url }) => {
  return (
    <Article>
      <ArticleImage imgSrc={image} imgAlt={imageAlt} />
      <div className="article-body">
        <ArticleTitle>{title}</ArticleTitle>
        <ArticleContent>{content}</ArticleContent>

        <Link to={url}>
          <button>
            Read More <ArrowRightIcon strokeWidth="1.2" size="20" />
          </button>
        </Link>
      </div>
    </Article>
  );
};

export default Blog;

const Article = styled.article`
  border-radius: 6px;
  background: #fff;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;

  @media ${devices.tablet} {
    margin-bottom: 0;
  }

  .article-body {
    padding: 20px;
  }

  a {
    display: inline-block;

    button {
      color: #4a4aed;
      font-size: 18px;
      cursor: pointer;
      background: none;
      width: fit-content;
      display: flex;
      align-items: center;
      margin-top: 20px;
      border: 1px solid #bcb8b8;
      border-radius: 6px;
      padding: 12px 15px;

      @media ${devices.laptop} {
        padding: 14px 18px;
      }

      @media ${devices.laptopL} {
        padding: 16px 20px;
      }

      &:active {
        background: #efeeee;
      }
    }
  }
`;
