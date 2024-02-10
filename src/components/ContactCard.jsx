import styled from "styled-components";

const ContactCard = (props) => {
  return (
    <Card>
      {props.icon}
      <h5 className="contact">{props.name}</h5>
    </Card>
  );
};

export default ContactCard;

const Card = styled.div`
  width: 100%;
  border: 1px solid black;
  margin-top: 10px;
  display: flex;
  padding: 15px;
  background: #fff;

  .contact {
    font-size: 13px;
    font-weight: 300;
    margin-left: 10px;
    border-bottom: 1px solid #b60606;
  }
`;
