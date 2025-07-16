import styled from "styled-components";

import { devices } from "../utils/breakpoints";

const ArticleContent = ({ children }) => {
  return <Paragraph>{children}</Paragraph>;
};

export default ArticleContent;

const Paragraph = styled.p`
  font-size: 18px;
  color: #3d528a;
`;
