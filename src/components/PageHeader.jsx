import Navbar from "./Navbar";
import Banner from "./Banner";
import MobileMenu from "./MobileMenu";

import styled from "styled-components";

import { useState } from "react";

const PageHeader = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Container>
      <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
      {showMenu && <MobileMenu />}
      <Banner />
    </Container>
  );
};

export default PageHeader;

const Container = styled.header``;
