import { Link } from "react-router-dom";

import styled from "styled-components";
import { devices } from "../utils/breakpoints";

const Logo = () => {
  return (
    <Heading>
      <Link to="/">EXPEDIT</Link>
    </Heading>
  );
};

export default Logo;

const Heading = styled.h1`
  font-size: 24px;
  letter-spacing: -1px;
  text-transform: uppercase;
  font-weight: 400;

  @media ${devices.laptopL} {
    font-size: 26px;
  }
`;
