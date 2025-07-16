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
      <SectionTitle>Our Team would be Happy to Hear From You</SectionTitle>

      <Grid>
        <div className="grid-item-1">
          <ArticleTitle>Get in Touch Today</ArticleTitle>
          <BodyContent>
            Use the secure form to send a message regarding any concerns you may
            have. Should you have any information regarding a referral from a GP
            please also include this and we will be in touch with the next steps
          </BodyContent>
          <Link>
            <a href="/">info@expedit.com</a>
          </Link>
          <Link>
            <a href="/">(723) 548-4843</a>
          </Link>
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
    gap: 40px;
  }

  @media ${devices.laptop} {
    gap: 80px;
  }

  .grid-item-1 {
    display: flex;
    flex-direction: column;
    justify-self: right;
  }
`;

const Link = styled.p`
  font-size: 18px;
  margin-bottom: 4px;
  width: fit-content;

  a {
    color: #4a62ed;
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
