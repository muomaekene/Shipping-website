import { Link } from "react-router-dom";

import styled from "styled-components";

const Logo = () => {
  return <Heading to="/">EXPEDIT.</Heading>;
};

export default Logo;

const Heading = styled(Link)`
  font-size: 28px;
  letter-spacing: -1px;
  text-transform: uppercase;
  font-weight: 600;
  color: #c7314d;
`;
