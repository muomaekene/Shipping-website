import Section from "./Section";
import SectionTitle from "./SectionTitle";
import ArticleContent from "./ArticleContent";
import ArticleTitle from "./ArticleTitle";
import ContactForm from "./ContactForm";

import { devices } from "../utils/breakpoints";

import styled from "styled-components";

const ContactUs = () => {
  return (
    <Section idValue="contact-us" backgroundColor="#f1f3f5">
      <SectionTitle title="We'd Love to Hear From You" />

      <Grid>
        <div className="grid-item-1">
          <ArticleTitle title="Get in Touch Today" />
          <ArticleContent
            content="Use the secure form to send a message regarding any concerns you may
            have. Should you have any information regarding a referral from a GP
            please also include this and we will be in touch with the next
            steps."
          />
          <Link href="">info@shipquest.com</Link>
          <Link href="">723 548 4843</Link>
        </div>

        <div className="grid-item-2">
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
    gap: 20px;
  }

  .grid-item-1 {
    display: flex;
    flex-direction: column;
    justify-self: right;
  }
`;

const Link = styled.a`
  font-size: 14px;
  font-weight: 400;
  color: #445069;
  margin-bottom: 2px;
  width: fit-content;

  @media ${devices.tablet} {
    font-size: 14px;
  }

  @media ${devices.laptop} {
    font-size: 16px;
  }
`;
