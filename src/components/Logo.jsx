import styled from "styled-components";
import { devices } from "../utils/breakpoints";

const Logo = () => {
  return <Heading>EXPEDY</Heading>;
};

export default Logo;

const Heading = styled.h1`
  font-size: 26px;
  letter-spacing: -1px;
  text-transform: uppercase;
  color: #fff;
  font-family: "Anta", sans-serif;

  @media ${devices.tablet} {
    font-size: 26px;
  }

  @media ${devices.laptopL} {
    font-size: 30px;
  }
`;
