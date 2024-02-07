import Navbar from "./Navbar";
import Banner from "./Banner";

import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <Navbar />
      <Banner />
    </Container>
  );
};

export default Header;

const Container = styled.header``;
