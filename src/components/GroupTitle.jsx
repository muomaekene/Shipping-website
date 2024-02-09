import styled from "styled-components";

const GroupTitle = ({ title }) => {
  return <Container>{title}</Container>;
};

export default GroupTitle;

const Container = styled.h4`
  font-weight: 500;
  font-size: 18px;
  color: darkcyan;
`;
