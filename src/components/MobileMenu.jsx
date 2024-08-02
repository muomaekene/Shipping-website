import { X } from "lucide-react";
import Button from "./Button";

import styled from "styled-components";

const MobileMenu = ({ showMenu, setShowMenu }) => {
  const menuToggle = () => {
    setShowMenu(!showMenu);
    document.body.style.overflow = "auto";
  };

  return (
    <Container>
      <div className="menu-top">
        <p>MENU</p>

        <button onClick={menuToggle}>
          <X size="30" strokeWidth="1.4" color="#000" />
        </button>
      </div>

      <ul onClick={menuToggle}>
        <li>
          <a href="#about">Company</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#careers">Careers</a>
        </li>
        <li>
          <a href="#news">News</a>
        </li>
        <li>
          <a href="#contact-us">Contact Us</a>
        </li>
      </ul>
      <Button name="Ship Now" />
    </Container>
  );
};

export default MobileMenu;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 666;
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 20px;

  .menu-top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;

    p {
      font-weight: 400;
      font-size: 24px;
    }

    button {
      background: none;
    }
  }

  ul {
    list-style-type: none;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  li {
    font-size: 16px;
    display: inline-block;
    height: 3.5rem;
    width: 100%;
  }

  a {
    text-decoration: none;
    color: #445069;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }
`;
