import styled from "styled-components";

const MobileMenu = () => {
  return (
    <Container>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#about">About Our Company</a>
        </li>
        <li>
          <a href="#services">Services We Offer</a>
        </li>
        <li>
          <a href="#careers">Career & Jobs</a>
        </li>
        <li>
          <a href="#contact-us">Contact Us</a>
        </li>
      </ul>
    </Container>
  );
};

export default MobileMenu;

const Container = styled.section`
  padding: 0 20px;
  width: 100%;

  ul {
    list-style-type: none;
  }

  li {
    margin: 20px 0;
    font-size: 14px;
    font-weight: 300;
  }

  a {
    text-decoration: none;
    color: #445069;
  }
`;
