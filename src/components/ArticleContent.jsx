import styled from "styled-components";

import { devices } from "../utils/breakpoints";

const ArticleContent = ({ content }) => {
  return <Paragraph>{content}</Paragraph>;
};

export default ArticleContent;

const Paragraph = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #445069;
  margin-bottom: 20px;

  @media ${devices.tablet} {
    font-size: 16px;
  }
`;
