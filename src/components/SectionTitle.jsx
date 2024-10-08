import styled from "styled-components";

import { devices } from "../utils/breakpoints";

const SectionTitle = ({ title, color }) => {
  return <Container style={{ color }}>{title}</Container>;
};

export default SectionTitle;

const Container = styled.h3`
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-size: 30px;
  color: #162a60;
  margin-bottom: 20px;
  letter-spacing: -1px;
  text-transform: capitalize;

  @media ${devices.tablet} {
    font-size: 32px;
  }

  @media ${devices.laptop} {
    font-size: 34px;
  }

  @media ${devices.laptopL} {
    font-size: 36px;
  }
`;
