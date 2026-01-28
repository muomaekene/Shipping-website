import ButtonLink from "./ButtonLink";

import { devices } from "../utils/breakpoints";
import styled from "styled-components";

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
    border: 1px solid #b3b4bc;
    background: #f0f0f0;
    padding-left: 15px;
    font-size: 18px;
    margin-bottom: 15px;
    height: 60px;
    outline: none;

    :focus {
      background: red;
    }

    @media ${devices.laptopL} {
      padding-left: 20px;
      margin-bottom: 15px;
    }
  }

  .feedback-field {
    margin-bottom: 20px;
    border-radius: 6px;
    border: 1px solid #b3b4bc;
    background: #f0f0f0;
    padding: 15px;
    font-size: 18px;
    outline: none;

    @media ${devices.laptopL} {
      padding-left: 20px;
      margin-bottom: 15px;
    }
  }
`;
