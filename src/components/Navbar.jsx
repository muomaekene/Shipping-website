// import { useState } from "react";
import Logo from "./Logo";

import { Menu } from "lucide-react";
import { devices } from "../utils/breakpoints";

import styled from "styled-components";

const Navbar = ({ showMenu, setShowMenu }) => {
  // const [navbar, setNavbar] = useState(false);

  // const toggleNavbar = () => {
  //   if (window.scrollY >= 80) {
  //     setNavbar(true);
  //   } else {
  //     setNavbar(false);
  //   }
  // };

  // window.addEventListener("scroll", toggleNavbar);

  return (
    <Nav>
      <Logo />
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
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
        <li>
          <a href="/ship">Ship Now</a>
        </li>
      </ul>

      <button
        className="menu-btn"
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      >
        <Menu size="30" color="#fff" />
      </button>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  width: 100%;
  min-height: 70px;
  top: 0;
  z-index: 666;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background: #0e0e0e;

  @media ${devices.laptop} {
    padding: 0 60px;
  }

  @media ${devices.laptopL} {
    padding-left: 80px;
    padding-right: 80px;
  }

  ul {
    display: none;
    list-style-type: none;

    @media ${devices.tablet} {
      display: block;
    }

    li {
      display: inline;
      padding-bottom: 10px;

      @media ${devices.tablet} {
        margin-left: 25px;
        font-size: 16px;
      }

      @media ${devices.laptop} {
        font-size: 18px;
        margin-left: 35px;
      }

      @media ${devices.laptopL} {
        font-size: 20px;
        margin-left: 45px;
      }

      a {
        color: #a0a0a4;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
          text-decoration-color: #fff;
          color: #fff;
          text-decoration-thickness: 0.5px;
          text-underline-position: under;
        }
      }
    }
  }

  li:last-child {
    background: #4a4aed;
    border-radius: 4px;
    padding: 12px 24px;
    cursor: pointer;

    a {
      color: #fff;

      &:hover {
        text-decoration: none;
      }
    }
  }

  .menu-btn {
    display: flex;
    padding: 2px;
    background: none;
    cursor: pointer;

    @media ${devices.tablet} {
      display: none;
    }
  }
`;
