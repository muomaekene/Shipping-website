import { devices } from "../utils/breakpoints";

import styled from "styled-components";

const SectionContent = ({ content, color }) => {
  return <Paragraph style={{ color }}>{content}</Paragraph>;
};

export default SectionContent;

const Paragraph = styled.p`
  font-size: 16px;
  color: #283143;
  margin-bottom: 20px;
  line-height: 1.5;

  @media ${devices.tablet} {
    width: 50%;
  }

  @media ${devices.laptop} {
    font-size: 18px;
  }

  @media ${devices.laptopL} {
    font-size: 20px;
  }
`;
