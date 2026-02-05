import Section from "./Section";
import SectionTitle from "./SectionTitle";
import BodyContent from "./BodyContent";
import ArticleTitle from "./ArticleTitle";
import ContactForm from "./ContactForm";

import { devices } from "../utils/breakpoints";

import styled from "styled-components";

const ContactUs = () => {
  return (
    <Section>
      <Grid>
        <div className="grid-item-1">
          <SectionTitle>Our Team would be Happy to Hear From You</SectionTitle>

          <BodyContent>
            Have a question about our services or need assistance with your
            shipment? Our dedicated team is here to help you every step of the
            way. Reach out to us via email, phone, or our secure form and we'll
            ensure your logistics needs are met with professionalism and care.
          </BodyContent>
          <Link>
            <a href="/">info@expedit.com</a>
          </Link>
          <Link>
            <a href="/">(723) 548-4843</a>
          </Link>
        </div>

        <div className="grid-item-2">
          <ArticleTitle>Get in Touch</ArticleTitle>

          <ContactForm />
        </div>
      </Grid>
    </Section>
  );
};

export default ContactUs;

const Grid = styled.div`
  display: block;
  margin-top: 20px;

  @media ${devices.tablet} {
    display: grid;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }

  @media ${devices.laptop} {
    gap: 80px;
  }

  .grid-item-1 {
    display: flex;
    flex-direction: column;
    justify-self: right;
    margin-bottom: 40px;
  }

  .grid-item-2 {
    display: flex;
    flex-direction: column;
    justify-content: right;
  }
`;

const Link = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
  width: fit-content;

  a {
    color: #33365e;
    text-decoration: none;
  }

  :hover {
    color: #3d528a;
    text-decoration: underline;
    text-decoration-color: #3d528a;
    text-decoration-thickness: 1px;
    text-underline-position: under;
  }
`;
