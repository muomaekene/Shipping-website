import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

import ButtonLink from "./ButtonLink";
import Logo from "./Logo";

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
        <li>
          <ButtonLink url="/get-quote" hex="#fff">
            Ship Now
          </ButtonLink>
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
  font-size: 18px;

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

    .active {
      color: #a0a0a4;
      text-decoration: underline;
      text-decoration-color: #a0a0a4;
      text-decoration-thickness: 1px;
      text-underline-position: under;
    }

    li {
      @media ${devices.tablet} {
        display: inline;
        margin-left: 25px;
      }

      @media ${devices.laptop} {
        margin-left: 30px;
      }

      @media ${devices.laptopL} {
        margin-left: 35px;
      }

      :hover {
        color: #a0a0a4;
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
