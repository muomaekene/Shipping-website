import { devices } from "../utils/breakpoints";

import styled from "styled-components";

const Button = ({ name }) => {
  return <CustomButton>{name}</CustomButton>;
};

export default Button;

const CustomButton = styled.button`
  width: fit-content;
  padding: 16px 30px;
  background: #4a4aed;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
  transition: ease all 0.5s;

  &:hover {
    background: #3636b5;
  }

  @media ${devices.laptop} {
    font-size: 18px;
  }

  @media ${devices.laptopL} {
    font-size: 20px;
    padding: 20px 40px;
  }
`;
