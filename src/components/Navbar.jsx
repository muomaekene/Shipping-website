import { Menu, X } from "lucide-react";
import Logo from "./Logo";

import styled from "styled-components";

const Navbar = ({ showMenu, setShowMenu }) => {
  return (
    <Nav>
      <Logo />
      <button
        className="menu-btn"
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      >
        {showMenu ? <X /> : <Menu />}
      </button>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  background: lightblue;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  height: 4rem;
  position: relative;

  .menu-btn {
    border: 1px solid black;
    display: flex;
    padding: 2px;
    background: none;
  }
`;
