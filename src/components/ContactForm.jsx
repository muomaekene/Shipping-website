import Button from "./Button";

import styled from "styled-components";
import { devices } from "../utils/breakpoints";

const ContactForm = () => {
  return (
    <Form>
      <input placeholder="Name" className="input-field" type="text" />
      <input placeholder="Email Address" className="input-field" type="email" />
      <textarea
        className="feedback-field"
        name="feedback"
        placeholder="Your Message"
        cols="30"
        rows="5"
      />

      <Button name="Send Message" />
    </Form>
  );
};

export default ContactForm;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  @media ${devices.tablet} {
    padding: 20px;
  }

  .input-field {
    border: 1px solid #b4b4b8;
    border-radius: 4px;
    padding: 15px;
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 10px;

    @media ${devices.laptop} {
      font-size: 16px;
    }
  }

  .feedback-field {
    margin-bottom: 10px;
    border: 1px solid #b4b4b8;
    border-radius: 4px;
    padding: 15px;
    font-size: 16px;
    font-weight: 400;

    @media ${devices.laptop} {
      font-size: 16px;
    }
  }
`;
