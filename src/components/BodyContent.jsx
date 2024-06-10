import { devices } from "../utils/breakpoints";

import styled from "styled-components";

const BodyContent = ({ content, color }) => {
  return <Paragraph style={{ color }}>{content}</Paragraph>;
};

export default BodyContent;

const Paragraph = styled.p`
  font-size: 16px;
  color: #505a6f;
  margin-bottom: 20px;
  line-height: 1.5;

  @media ${devices.laptop} {
    font-size: 18px;
  }

  @media ${devices.laptopL} {
    font-size: 20px;
  }
`;
