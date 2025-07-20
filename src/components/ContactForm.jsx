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

  @media ${devices.tablet} {
    margin-top: 0;
  }

  .input-field {
    border-radius: 4px;
    border: 1px solid #c1c3cf;
    padding-left: 15px;
    font-size: 18px;
    margin-bottom: 10px;
    height: 70px;
    outline: none;

    @media ${devices.laptopL} {
      padding-left: 20px;
      margin-bottom: 15px;
    }
  }

  .feedback-field {
    margin-bottom: 10px;
    border-radius: 4px;
    border: 1px solid #c1c3cf;
    padding: 15px;
    font-size: 18px;
    outline: none;

    @media ${devices.laptopL} {
      padding-left: 20px;
      margin-bottom: 15px;
    }
  }
`;
