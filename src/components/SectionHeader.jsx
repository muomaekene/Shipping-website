import styled from "styled-components";

import { devices } from "../utils/breakpoints";

const SectionHeader = ({ title }) => {
  return <Container>{title}</Container>;
};

export default SectionHeader;

const Container = styled.h3`
  font-size: 22px;
  text-transform: capitalize;
  margin-bottom: 10px;
  color: #1d2b53;
  font-weight: 400;
  @media ${devices.laptop} {
    font-size: 24px;
  }

  @media ${devices.laptopL} {
    font-size: 26px;
  }
`;
