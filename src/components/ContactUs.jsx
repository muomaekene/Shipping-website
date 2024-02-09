import SectionTitle from "./SectionTitle";
import GroupTitle from "./GroupTitle";
import customerService from "../images/customer-service.jpg";

import styled from "styled-components";
import GroupContent from "./GroupContent";
import { Mail, Phone } from "lucide-react";
import GroupButton from "./GroupButton";

const ContactUs = () => {
  return (
    <Container>
      <SectionTitle title="We'd Love to Hear From You" />
      <img
        className="customer-service"
        src={customerService}
        alt="female customer service worker"
      />
      <div className="contact-group">
        <GroupTitle title="Want To Use Our Services, Discuss Partnership, Give a Feedback, or Make a Complaint? You Can Always Reach Us" />
        <article className="contact-box">
          <Phone size={18} strokeWidth={1} />
          <h5 className="contact">+1 234 758 484</h5>
          <GroupContent />
        </article>
        <article className="contact-box">
          <Mail size={18} strokeWidth={1} />
          <h5 className="contact">customersupport@shippin.com</h5>
        </article>
        <form className="contact-form">
          <input placeholder="Name" className="input-field" type="text" />
          <input
            placeholder="Email Address"
            className="input-field"
            type="email"
          />
          <textarea
            className="feedback-field"
            name="feedback"
            placeholder="Lets hear from you..."
            cols="30"
            rows="5"
          />

          <GroupButton name="Send Message" />
        </form>
      </div>
    </Container>
  );
};

export default ContactUs;

const Container = styled.section`
  padding: 15px;
  background: #f1e8e8;

  .contact-box {
    font-size: 14px;
    width: 100%;
    border: 1px solid black;
    margin-top: 10px;
    display: flex;
    padding: 15px;
    background: #fff;
  }

  .customer-service {
    margin-top: 30px;
  }
  .contact-group {
    margin-top: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .contact {
    margin-left: 15px;
    font-size: 14px;
    font-weight: 300;
  }

  .contact-form {
    padding: 15px;
    margin-top: 15px;
    width: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
  }

  .input-field {
    border: 1px solid black;
    padding: 10px;
    font-size: 14px;
    margin-bottom: 10px;
  }

  .feedback-field {
    margin-bottom: 10px;
    border: 1px solid black;
    padding: 10px;
    font-size: 14px;
  }
`;
