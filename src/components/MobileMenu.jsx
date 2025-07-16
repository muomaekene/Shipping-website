import { Link } from "react-router-dom";

import { X } from "lucide-react";
// import Button from "./Button";

import styled from "styled-components";
import ButtonLink from "./ButtonLink";

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

      <ul>
        <li>
          <Link to="/about">Company</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/careers">Careers</Link>
        </li>
        <li>
          <Link to="/latest-news">News</Link>
        </li>
      </ul>

      <ButtonLink url="/get-quote">Ship Now</ButtonLink>
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
    font-size: 18px;
    display: inline-block;
    height: 3.5rem;
    width: 100%;
  }

  a {
    color: #445069;
    display: flex;
    align-items: center;
  }
`;
