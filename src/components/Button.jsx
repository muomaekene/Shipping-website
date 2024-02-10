import styled from "styled-components";

const Button = ({ name }) => {
  return <CustomButton>{name}</CustomButton>;
};

export default Button;

const CustomButton = styled.button`
  width: fit-content;
  padding: 5px 10px;
  background: lightblue;
  border: 1px solid black;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
`;
