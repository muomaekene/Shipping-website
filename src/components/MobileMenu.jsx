import { X } from "lucide-react";
import Button from "./Button";

import styled from "styled-components";

const MobileMenu = ({ showMenu, setShowMenu }) => {
  return (
    <Container>
      <div className="menu-top">
        <p>MENU</p>

        <button
          onClick={() => {
            setShowMenu(!showMenu);
            document.body.style.overflow = "auto";
          }}
        >
          <X size="30" strokeWidth="1.4" color="#000" />
        </button>
      </div>

      <ul>
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
  }

  li {
    margin: 25px 0;
    font-size: 16px;
  }

  a {
    text-decoration: none;
    color: #445069;
  }
`;
