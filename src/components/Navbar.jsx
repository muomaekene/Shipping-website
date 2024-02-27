import Logo from "./Logo";

import { Menu, X } from "lucide-react";
import { devices } from "../utils/breakpoints";

import styled from "styled-components";

const Navbar = ({ showMenu, setShowMenu }) => {
  return (
    <Nav>
      <Logo />
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#about">About Our Company</a>
        </li>
        <li>
          <a href="#services">Our Services</a>
        </li>
        <li>
          <a href="#careers">Career & Jobs</a>
        </li>
        <li>
          <a href="#contact-us">Contact Us</a>
        </li>
      </ul>

      <button
        className="menu-btn"
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      >
        {showMenu ? <X color="#ced4da" /> : <Menu color="#ced4da" />}
      </button>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  background: #090976;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4.5rem;
  padding: 0 20px;
  position: sticky;
  top: 0;

  ul {
    display: none;
    list-style-type: none;

    @media ${devices.tablet} {
      display: block;
    }

    li {
      display: inline;
      font-size: 14px;
      font-weight: 300;
      margin-right: 25px;
      padding-bottom: 10px;

      &:hover {
        text-decoration: underline;
        text-decoration-color: #ced4da;
        text-decoration-thickness: 0.8px;
        text-underline-position: under;
      }

      @media ${devices.laptop} {
        font-size: 16px;
      }

      a {
        color: #ced4da;
        text-decoration: none;
      }
    }
  }

  .menu-btn {
    border: 1px solid #ced4da;
    display: flex;
    padding: 2px;
    background: none;

    @media ${devices.tablet} {
      display: none;
    }
  }
`;
