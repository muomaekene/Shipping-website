import Navbar from "./Navbar";
import Banner from "./Banner";
import MobileMenu from "./MobileMenu";

import styled from "styled-components";

import { useState } from "react";

const PageHeader = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Header>
      <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
      {showMenu && <MobileMenu />}
      <Banner />
    </Header>
  );
};

export default PageHeader;

const Header = styled.header`
  position: relative;
`;
