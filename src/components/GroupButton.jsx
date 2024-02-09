import styled from "styled-components";

const GroupButton = ({ name }) => {
  return <Container>{name}</Container>;
};

export default GroupButton;

const Container = styled.button`
  width: fit-content;
  padding: 5px 10px;
  background: lightblue;
  border: 1px solid black;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
`;
