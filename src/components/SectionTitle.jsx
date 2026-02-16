import styled from "styled-components";

import { devices } from "../utils/breakpoints";

const SectionTitle = ({ color, children }) => {
  return <Container style={{ color }}>{children}</Container>;
};

export default SectionTitle;

const Container = styled.h3`
  font-family: "REM", sans-serif;
  font-style: normal;
  font-size: 34px;
  color: #2a3f68;
  margin-bottom: 15px;
  text-transform: capitalize;
  line-height: 1.2;
  letter-spacing: -0.5px;
  margin-top: -10px;

  @media ${devices.laptop} {
    font-size: 40px;
  }
`;
