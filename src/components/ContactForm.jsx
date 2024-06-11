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
    border: 1px solid #8d8a8a;
    padding-left: 15px;
    font-size: 16px;
    margin-bottom: 10px;
    height: 55px;
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

    @media ${devices.laptop} {
      font-size: 18px;
    }

    @media ${devices.laptopL} {
      font-size: 20px;
      height: 70px;
      padding-left: 20px;
      margin-bottom: 15px;
    }
  }

  .feedback-field {
    margin-bottom: 10px;
    border-radius: 4px;
    border: 1px solid #8d8a8a;
    padding: 15px;
    font-size: 16px;
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    @media ${devices.laptop} {
      font-size: 18px;
    }

    @media ${devices.laptopL} {
      font-size: 20px;
      padding-left: 20px;
      margin-bottom: 15px;
    }
  }
`;
