import TopFooter from "./TopFooter";
import { devices } from "../utils/breakpoints";
import styled from "styled-components";

const Footer = () => {
  return (
    <PageFooter>
      <TopFooter />
      <Paragraph className="copyright">
        &copy; 2024 EXPEDIT Shipping Co. All rights reserved.
      </Paragraph>
    </PageFooter>
  );
};

export default Footer;

const PageFooter = styled.footer`
  background: #0e0e0e;
`;

const Paragraph = styled.p`
  padding: 20px;
  border-top: 1px solid #3a3c3d;
  width: 100%;
  font-size: 16px;
  color: #a0a0a4;
  text-align: center;

  @media ${devices.laptop} {
    font-size: 17px;
  }

  @media ${devices.laptopL} {
    font-size: 18px;
  }
`;
