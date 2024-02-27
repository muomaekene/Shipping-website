import styled from "styled-components";
import { devices } from "../utils/breakpoints";

const SectionHeader = ({ content }) => {
  return <Header>{content}</Header>;
};

export default SectionHeader;

const Header = styled.h4`
  font-size: 18px;
  font-family: "Overpass", sans-serif;
  font-weight: 400;
  text-align: left;
  color: #d90429;

  @media ${devices.tablet} {
    font-size: 22px;
  }

  @media ${devices.laptop} {
    font-size: 24px;
  }
`;
