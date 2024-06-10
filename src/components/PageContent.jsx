import PageHeader from "./PageHeader";
import About from "./About";
import Services from "./Services";
import Reviews from "./Reviews";
import Blogs from "./Blogs";
import Careers from "./Careers";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Partners from "./Partners";

import styled from "styled-components";
import Quote from "./Quote";
import Track from "./Track";

const PageContent = () => {
  return (
    <Main>
      <PageHeader />
      <Partners />
      <About />
      <Services />
      <Quote />
      <Reviews />
      <Careers />
      <Track />
      <Blogs />
      <ContactUs />
      <Footer />
    </Main>
  );
};

export default PageContent;

const Main = styled.main``;
