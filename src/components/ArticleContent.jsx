import styled from "styled-components";

import { devices } from "../utils/breakpoints";

const BodyContent = ({ content }) => {
  return <Paragraph>{content}</Paragraph>;
};

export default BodyContent;

const Paragraph = styled.p`
  font-size: 16px;
  color: #283143;

  @media ${devices.laptop} {
    font-size: 17px;
  }

  @media ${devices.laptopL} {
    font-size: 18px;
  }
`;
