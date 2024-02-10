import styled from "styled-components";

const Footer = () => {
  return (
    <PageFooter>
      <Paragraph className="copyright">
        Copyright &copy; 2024 Shippn Co.
      </Paragraph>
    </PageFooter>
  );
};

export default Footer;

const PageFooter = styled.footer`
  background: #eeeded;
`;

const Paragraph = styled.p`
  width: 100%;
  padding: 15px;
  font-size: 14px;
  font-weight: 300;
  display: flex;
  justify-content: center;
`;
