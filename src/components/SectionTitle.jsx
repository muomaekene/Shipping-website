import styled from "styled-components";

import { devices } from "../utils/breakpoints";

const SectionTitle = ({ title }) => {
  return <Container>{title}</Container>;
};

export default SectionTitle;

const Container = styled.h3`
  font-family: "Overpass", sans-serif;
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #1d2b53;

  @media ${devices.tablet} {
    font-size: 18px;
  }

  @media ${devices.laptop} {
    font-size: 20px;
  }
`;
