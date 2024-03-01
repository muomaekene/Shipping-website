import styled from "styled-components";

import { devices } from "../utils/breakpoints";

const SectionTitle = ({ title }) => {
  return <Container>{title}</Container>;
};

export default SectionTitle;

const Container = styled.h3`
  font-family: "Sen", sans-serif;
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 20px;
  color: #1d2b53;
  letter-spacing: -1px;

  @media ${devices.tablet} {
    font-size: 20px;
  }

  @media ${devices.laptop} {
    font-size: 22px;
  }
`;
