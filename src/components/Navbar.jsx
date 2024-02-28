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
        {showMenu ? (
          <X size="28" color="#ced4da" />
        ) : (
          <Menu size="28" color="#ced4da" />
        )}
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
  height: 80px;
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
      font-size: 16px;
      font-weight: 300;
      margin-right: 25px;
      padding-bottom: 10px;

      &:hover {
        text-decoration: underline;
        text-decoration-color: #ced4da;
        text-decoration-thickness: 0.8px;
        text-underline-position: under;
      }

      @media ${devices.tablet} {
        font-size: 18px;
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
    border-radius: 4px;

    @media ${devices.tablet} {
      display: none;
    }
  }
`;
