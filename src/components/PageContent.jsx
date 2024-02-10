import About from "./About";
import Careers from "./Careers";
import ContactUs from "./ContactUs";
import Reviews from "./Reviews";
import Services from "./Services";
import TopFooter from "./TopFooter";
import Footer from "./Footer";

import styled from "styled-components";

const PageContent = () => {
  return (
    <Main>
      <About />
      <Reviews />
      <Services />
      <Careers />
      <ContactUs />
      <TopFooter />
      <Footer />
    </Main>
  );
};

export default PageContent;

const Main = styled.main``;
