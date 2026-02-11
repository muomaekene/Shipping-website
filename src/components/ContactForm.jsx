import ButtonLink from "./ButtonLink";

import { devices } from "../utils/breakpoints";
import styled from "styled-components";

const ContactForm = () => {
  return (
    <Form>
      <input
        name="Fullname"
        placeholder="Full Name"
        className="input-field"
        type="text"
      />
      <input
        name="EmailAddress"
        placeholder="Email Address"
        className="input-field"
        type="email"
      />
      <input
        name="PhoneNumber"
        placeholder="Phone Number"
        className="input-field"
        type="text"
      />
      <textarea
        className="feedback-field"
        name="feedback"
        placeholder="Message"
        cols="30"
        rows="6"
      />
      <ButtonLink url="#" hex="#162a60">
        Send Message
      </ButtonLink>
    </Form>
  );
};

export default ContactForm;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  .input-field {
    border-radius: 6px;
    padding-left: 15px;
    font-size: 18px;
    margin-bottom: 15px;
    height: 60px;
    outline: none;
    box-shadow:
      rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

    ::placeholder {
      color: #afb1be;
    }

    @media ${devices.laptopL} {
      padding-left: 20px;
      margin-bottom: 15px;
    }
  }

  .feedback-field {
    margin-bottom: 20px;
    border-radius: 6px;
    padding: 15px;
    font-size: 18px;
    outline: none;
    box-shadow:
      rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

    @media ${devices.laptopL} {
      padding-left: 20px;
      margin-bottom: 15px;
    }
  }
`;
