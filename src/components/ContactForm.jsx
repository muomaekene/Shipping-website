import Button from "./Button";

import styled from "styled-components";

const ContactForm = () => {
  return (
    <Form>
      <input placeholder="Name" className="input-field" type="text" />
      <input placeholder="Email Address" className="input-field" type="email" />
      <textarea
        className="feedback-field"
        name="feedback"
        placeholder="Lets hear from you..."
        cols="30"
        rows="5"
      />

      <Button name="Send Message" />
    </Form>
  );
};

export default ContactForm;

const Form = styled.form`
  padding: 15px;
  margin-top: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid black;

  .input-field {
    border: 1px solid black;
    padding: 10px;
    font-size: 14px;
    font-weight: 300;
    margin-bottom: 10px;
  }

  .feedback-field {
    margin-bottom: 10px;
    border: 1px solid black;
    padding: 10px;
    font-size: 14px;
    font-weight: 300;
  }
`;
