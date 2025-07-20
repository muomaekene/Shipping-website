import styled from "styled-components";

const ArticleTitle = ({ children }) => {
  return <Heading>{children}</Heading>;
};

export default ArticleTitle;

const Heading = styled.h4`
  text-transform: capitalize;
  font-style: normal;
  font-size: 24px;
  color: #162a60;
  margin-bottom: 5px;
`;
