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
          Read More <ArrowRightIcon strokeWidth="1.2" size="20" />
        </Link>
      </div>
    </Article>
  );
};

export default Blog;

const Article = styled.article`
  border-radius: 6px;
  box-shadow:
    rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

  @media ${devices.tablet} {
    margin-bottom: 0;
  }

  .article-body {
    padding: 20px;
  }

  a {
    display: inline-block;

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
    background: #fff;

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
`;
