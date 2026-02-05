import styled from "styled-components";

import { devices } from "../utils/breakpoints";

const SectionTitle = ({ color, children }) => {
  return <Container style={{ color }}>{children}</Container>;
};

export default SectionTitle;

const Container = styled.h3`
  font-family: "Orelega One", serif;
  font-style: normal;
  font-size: 36px;
  font-weight: 400;
  color: #33365e;
  margin-bottom: 15px;
  letter-spacing: -1px;
  text-transform: capitalize;

  @media ${devices.laptop} {
    font-size: 40px;
  }
`;
