import { Link } from "react-router-dom";

import styled from "styled-components";
import { devices } from "../utils/breakpoints";

const Logo = () => {
  return <Heading to="/">EXPEDIT.</Heading>;
};

export default Logo;

const Heading = styled(Link)`
  font-size: 26px;
  letter-spacing: -1px;
  text-transform: uppercase;
  font-weight: 500;
  color: #cb1d49;

  @media ${devices.laptopL} {
    font-size: 26px;
  }
`;
