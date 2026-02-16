import { devices } from "../utils/breakpoints";

import styled from "styled-components";

const SectionContent = ({ color, children }) => {
  return <Paragraph style={{ color }}>{children}</Paragraph>;
};

export default SectionContent;

const Paragraph = styled.p`
  font-size: clamp(1.125rem, 1.05rem + 0.5vw, 1.375rem);
  color: #2d3054;
  margin-bottom: 20px;
  line-height: 1.5;

  @media ${devices.tablet} {
    width: 50%;
  }
`;
