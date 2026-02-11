import styled from "styled-components";

const ArticleTitle = ({ children }) => {
  return <Heading>{children}</Heading>;
};

export default ArticleTitle;

const Heading = styled.h4`
  text-transform: capitalize;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  color: #33365e;
  font-family: "REM", sans-serif;
`;
