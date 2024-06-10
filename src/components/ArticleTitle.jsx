import { devices } from "../utils/breakpoints";

import styled from "styled-components";

const ArticleTitle = ({ title }) => {
  return <Heading>{title}</Heading>;
};

export default ArticleTitle;

const Heading = styled.h4`
  text-transform: capitalize;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #1d2b53;
  letter-spacing: -1px;
  margin-bottom: 10px;

  @media ${devices.laptop} {
    font-size: 22px;
  }

  @media ${devices.laptopL} {
    font-size: 24px;
  }
`;
