import styled from "styled-components";

import { devices } from "../utils/breakpoints";

const SectionTitle = ({ color, children }) => {
  return <Container style={{ color }}>{children}</Container>;
};

export default SectionTitle;

const Container = styled.h3`
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-size: 34px;
  color: #3d528a;
  margin-bottom: 20px;
  line-height: 1.2;
  letter-spacing: -1px;
  text-transform: lowercase;

  @media ${devices.laptop} {
    font-size: 34px;
  }
`;
