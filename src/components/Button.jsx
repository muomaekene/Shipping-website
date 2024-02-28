import styled from "styled-components";
import { devices } from "../utils/breakpoints";

const Button = ({ name }) => {
  return <CustomButton>{name}</CustomButton>;
};

export default Button;

const CustomButton = styled.button`
  width: fit-content;
  padding: 12px 30px;
  background: #090976;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  border-radius: 4px;
  transition: ease all 0.5s;

  &:hover {
    background: #0404a4;
  }

  @media ${devices.tablet} {
    padding: 12px 35px;
    font-size: 18px;
  }

  @media ${devices.laptop} {
    padding: 14px 40px;
  }
`;
