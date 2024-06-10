import { useState } from "react";

import Navbar from "./Navbar";
import Banner from "./Banner";
import MobileMenu from "./MobileMenu";

import styled from "styled-components";

const PageHeader = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Header>
      <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
      {showMenu && <MobileMenu showMenu={showMenu} setShowMenu={setShowMenu} />}
      <Banner />
    </Header>
  );
};

export default PageHeader;

const Header = styled.header`
  position: relative;
  background: #0e0e0e;
`;
