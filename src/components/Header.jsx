import { useState } from "react";

import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";

import styled from "styled-components";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <PageHeader>
      <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
      {showMenu && <MobileMenu showMenu={showMenu} setShowMenu={setShowMenu} />}
    </PageHeader>
  );
};

export default Header;

const PageHeader = styled.header`
  position: relative;
  background: #0e0e0e;
  position: sticky;
`;
