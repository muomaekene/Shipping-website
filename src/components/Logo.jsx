import styled from "styled-components";
import { devices } from "../utils/breakpoints";

const Logo = () => {
  return <Heading>ShipQuest</Heading>;
};

export default Logo;

const Heading = styled.h1`
  font-size: 24px;
  letter-spacing: -1px;
  text-transform: uppercase;
  color: #fff;
  font-family: "Ruslan Display", sans-serif;

  @media ${devices.tablet} {
    font-size: 26px;
  }

  @media ${devices.laptopL} {
    font-size: 30px;
  }
`;
