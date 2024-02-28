import styled from "styled-components";

import { devices } from "../utils/breakpoints";

const SectionTitle = ({ title }) => {
  return <Container>{title}</Container>;
};

export default SectionTitle;

const Container = styled.h3`
  font-family: "Sen", sans-serif;
  font-size: 20px;
  font-weight: 400;
  text-transform: uppercase;
  margin-bottom: 20px;
  color: #1d2b53;
  letter-spacing: -1px;

  @media ${devices.tablet} {
    font-size: 22px;
  }

  @media ${devices.laptop} {
    font-size: 24px;
  }
`;
