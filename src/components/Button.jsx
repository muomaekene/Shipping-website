import { devices } from "../utils/breakpoints";

import styled from "styled-components";

const Button = ({ name }) => {
  return <CustomButton>{name}</CustomButton>;
};

export default Button;

const CustomButton = styled.button`
  width: fit-content;
  padding: 18px 34px;
  background: #4a4aed;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
  transition: ease all 0.3s;

  &:hover {
    background: #3636b5;
  }

  @media ${devices.laptop} {
    font-size: 17px;
  }

  @media ${devices.laptopL} {
    font-size: 18px;
    padding: 22px 40px;
  }
`;
