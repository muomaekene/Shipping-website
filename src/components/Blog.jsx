import { devices } from "../utils/breakpoints";

import ArticleImage from "./ArticleImage";
import ArticleTitle from "./ArticleTitle";
import ArticleContent from "./ArticleContent";

import styled from "styled-components";
import { ArrowRightIcon } from "lucide-react";

const Blog = ({ image, imageAlt, title, content }) => {
  return (
    <Container>
      <ArticleImage imgSrc={image} imgAlt={imageAlt} />
      <div className="article-body">
        <ArticleTitle title={title} />
        <ArticleContent content={content} />
        <button>
          Read More <ArrowRightIcon strokeWidth="1.5" size="20" />
        </button>
      </div>
    </Container>
  );
};

export default Blog;

const Container = styled.article`
  margin-bottom: 20px;
  border-radius: 4px;
  background: #fff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

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

    @media ${devices.laptop} {
      font-size: 18px;
    }

    @media ${devices.laptopL} {
      font-size: 20px;
    }
  }
`;
