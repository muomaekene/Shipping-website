import { devices } from "../utils/breakpoints";

import styled from "styled-components";

const Button = ({ name, icon }) => {
  return (
    <CustomButton>
      <p>{name}</p>
      <p>{icon}</p>
    </CustomButton>
  );
};

export default Button;

const CustomButton = styled.button`
  width: fit-content;
  padding: 18px 30px;
  background: #4a4aed;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
  transition: ease all 0.3s;
  display: flex;
  gap: 5px;

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
