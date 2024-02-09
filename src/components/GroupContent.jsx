import styled from "styled-components";

const GroupContent = ({ content }) => {
  return <Container>{content}</Container>;
};

export default GroupContent;

const Container = styled.p`
  font-size: 14px;
  font-weight: 300;
  margin-top: 5px;
  margin-bottom: 10px;
  /* text-align: justify; */
`;
