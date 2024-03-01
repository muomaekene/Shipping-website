import styled from "styled-components";

import { devices } from "../utils/breakpoints";

const ArticleTitle = ({ title }) => {
  return <Heading>{title}</Heading>;
};

export default ArticleTitle;

const Heading = styled.h4`
  /* font-family: "Sen", sans-serif; */
  font-weight: 500;
  font-style: normal;
  font-size: 22px;
  color: #d90429;
  letter-spacing: -1px;
  margin-bottom: 5px;

  @media ${devices.tablet} {
    font-size: 24px;
  }
`;
