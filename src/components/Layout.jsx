import Header from "./Header";
import Footer from "./Footer";

import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <Main>
      <Header />
      <div className="page-content">{children}</div>
      <Footer />
    </Main>
  );
};

export default Layout;

const Main = styled.main``;
