import styled from "styled-components";
import { devices } from "../utils/breakpoints";

const Logo = () => {
  return <Heading>EXPEDI</Heading>;
};

export default Logo;

const Heading = styled.h1`
  font-size: 26px;
  letter-spacing: -1px;
  text-transform: uppercase;
  color: #fff;
  font-weight: 400;

  @media ${devices.laptopL} {
    font-size: 30px;
  }
`;
