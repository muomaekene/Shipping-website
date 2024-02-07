import { Menu } from "lucide-react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Container>
      <h1 className="logo">Shipn.</h1>
      <div className="menu-cover">
        <Menu />
      </div>
    </Container>
  );
};

export default Navbar;

const Container = styled.nav`
  background: lightblue;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  height: 4rem;

  .logo {
    font-size: 22px;
    font-weight: 600;
    letter-spacing: -1px;
  }

  .menu-cover {
    border: 1px solid black;
    display: flex;
    padding: 2px;
  }
`;
