import About from "./About";
import Careers from "./Careers";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Reviews from "./Reviews";
import Services from "./Services";

import styled from "styled-components";

const PageContent = () => {
  return (
    <Container>
      <About />
      <Reviews />
      <Services />
      <Careers />
      <ContactUs />
      <Footer />
    </Container>
  );
};

export default PageContent;

const Container = styled.main``;
