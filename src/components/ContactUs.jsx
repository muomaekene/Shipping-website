import Section from "./Section";
import SectionTitle from "./SectionTitle";
import ArticleTitle from "./ArticleTitle";
import SectionImage from "./SectionImage";
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";

import customerService from "../images/customer-service.jpg";

import { Mail, Phone } from "lucide-react";
import styled from "styled-components";

const ContactUs = () => {
  return (
    <Section backgroundColor="#eff6fd">
      <SectionTitle title="We'd Love to Hear From You" />
      <SectionImage
        imgSrc={customerService}
        imgAlt="female customer service worker"
      />
      <Contact>
        <ArticleTitle title="Want To Use Our Services, Discuss Partnership, Give a Feedback, or Make a Complaint? You Can Always Reach Us" />
        <ContactCard
          name="customersupport@shippn.com"
          icon={<Mail size={18} strokeWidth={1} />}
        />
        <ContactCard
          name="+1 234 567 980"
          icon={<Phone size={18} strokeWidth={1} />}
        />
        <ContactForm />
      </Contact>
    </Section>
  );
};

export default ContactUs;

const Contact = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
