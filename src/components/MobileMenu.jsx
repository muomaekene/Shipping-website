import { NavLink } from "react-router-dom";

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
          <NavLink to="/about">Company</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/careers">Careers</NavLink>
        </li>
        <li>
          <NavLink to="/latest-news">News</NavLink>
        </li>
      </ul>
      <NavLink to="/get-quote">
        <Button name="Ship Now" />
      </NavLink>
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
