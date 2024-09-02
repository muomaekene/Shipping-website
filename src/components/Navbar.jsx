import Logo from "./Logo";

import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { devices } from "../utils/breakpoints";

import styled from "styled-components";

const Navbar = ({ showMenu, setShowMenu }) => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => setScroll(document.documentElement.scrollTop);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const MainNav = scroll >= 100 ? ScrolledNav : Nav;

  return (
    <MainNav>
      <Logo />
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
        <li>
          <a href="/ship">Ship Now</a>
        </li>
      </ul>

      <button
        className="menu-btn"
        onClick={() => {
          setShowMenu(!showMenu);
          document.body.style.overflow = "hidden";
        }}
      >
        <Menu size="30" strokeWidth="1.4" color="#fff" />
      </button>
    </MainNav>
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
  padding: 0 16px;
  background: #0e0e0e;

  @media ${devices.laptop} {
    min-height: 80px;
    padding: 0 24px;
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
        font-size: 17px;
        margin-left: 30px;
      }

      @media ${devices.laptopL} {
        font-size: 18px;
        margin-left: 35px;
      }

      a {
        color: #fff;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
          text-decoration-color: #d7d7dc;
          color: #d7d7dc;
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
    transition: ease all 0.3s;

    @media ${devices.laptop} {
      padding: 16px 30px;
    }

    @media ${devices.laptopL} {
      padding: 18px 34px;
    }

    &:hover {
      background: #3636b5;
    }

    a {
      color: #fff;

      &:hover {
        text-decoration: none;
        color: #fff;
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

const ScrolledNav = styled(Nav)`
  position: sticky;
  border-bottom: 1px solid #585858;
`;
