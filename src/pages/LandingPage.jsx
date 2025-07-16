import About from "../components/About";
import Banner from "../components/Banner";
import Layout from "../components/Layout";
import Partners from "../components/Partners";
import Services from "../components/Services";
import Quote from "../components/Quote";
import Reviews from "../components/Reviews";
import Careers from "../components/Careers";
import Track from "../components/Track";
import Blogs from "../components/Blogs";
import ContactUs from "../components/ContactUs";

const LandingPage = () => {
  return (
    <Layout>
      <Banner />
      <About />
      <Services />
      <Quote />
      <Reviews />
      <Careers />
      <Track />
      <Blogs />
      <Partners />
      <ContactUs />
    </Layout>
  );
};

export default LandingPage;
