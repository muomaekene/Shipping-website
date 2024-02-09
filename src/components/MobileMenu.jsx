import styled from "styled-components";

const MobileMenu = () => {
  return (
    <Container>
      <ul>
        <li>Home</li>
        <li>About Our Company</li>
        <li>Services We Offer</li>
        <li>Career & Jobs</li>
        <li>Contact Us</li>
      </ul>
    </Container>
  );
};

export default MobileMenu;

const Container = styled.section`
  background: #fff;
  padding: 0 15px;
  width: 100%;

  ul {
    list-style-type: none;
  }

  li {
    margin: 20px 0;
    font-size: 14px;
    font-weight: 300;
  }
`;
