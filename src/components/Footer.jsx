import { devices } from "../utils/breakpoints";

import styled from "styled-components";

const Footer = () => {
  return (
    <PageFooter>
      <Paragraph className="copyright">
        &copy; 2024 EXPEDI Co. <br />
        All rights reserved. EXPEDI and its logo are registered trademarks of
        Expedi Co.
      </Paragraph>
    </PageFooter>
  );
};

export default Footer;

const PageFooter = styled.footer`
  padding: 10px 20px;
`;

const Paragraph = styled.p`
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  color: #445069;

  @media ${devices.tablet} {
    font-size: 16px;
  }
`;
