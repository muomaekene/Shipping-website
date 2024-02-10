import styled from "styled-components";

const ArticleTitle = ({ title }) => {
  return <Heading>{title}</Heading>;
};

export default ArticleTitle;

const Heading = styled.h4`
  font-weight: 500;
  font-size: 18px;
  color: #b60606;
`;
