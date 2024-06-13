import Button from "./Button";

import styled from "styled-components";
import { devices } from "../utils/breakpoints";

const ContactForm = () => {
  return (
    <Form>
      <input placeholder="Name" className="input-field" type="text" />
      <input placeholder="Email Address" className="input-field" type="email" />
      <input placeholder="Phone Number" className="input-field" type="text" />
      <textarea
        className="feedback-field"
        name="feedback"
        placeholder="Message"
        cols="30"
        rows="6"
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
    margin-top: 0;
  }

  .input-field {
    border-radius: 4px;
    border: 1px solid #c8c5c5;
    padding-left: 15px;
    font-size: 16px;
    margin-bottom: 10px;
    height: 55px;
    outline: none;

    @media ${devices.laptop} {
      font-size: 17px;
    }

    @media ${devices.laptopL} {
      font-size: 18px;
      height: 70px;
      padding-left: 20px;
      margin-bottom: 15px;
    }
  }

  .feedback-field {
    margin-bottom: 10px;
    border-radius: 4px;
    border: 1px solid #c8c5c5;
    padding: 15px;
    font-size: 16px;
    outline: none;

    @media ${devices.laptop} {
      font-size: 17px;
    }

    @media ${devices.laptopL} {
      font-size: 18px;
      padding-left: 20px;
      margin-bottom: 15px;
    }
  }
`;
