import styled from "styled-components";
import { devices } from "../utils/breakpoints";

const SectionHeader = ({ content }) => {
  return <Header>{content}</Header>;
};

export default SectionHeader;

const Header = styled.h4`
  font-size: 20px;
  font-family: "Sen", sans-serif;
  text-transform: uppercase;
  font-weight: 400;
  text-align: left;
  color: #d90429;
  margin-bottom: 10px;
  letter-spacing: -1px;

  @media ${devices.tablet} {
    font-size: 22px;
  }

  @media ${devices.laptop} {
    font-size: 24px;
  }
`;
