import { Link } from "react-router-dom";

import Section from "./Section";
import SectionTitle from "./SectionTitle";
import SectionContent from "./SectionContent";
import Service from "./Service";
import Button from "./Button";

import payIcon from "../images/pay.png";
import locationIcon from "../images/location.png";
import securityIcon from "../images/security.png";
import transportIcon from "../images/transport.png";

import { devices } from "../utils/breakpoints";

import styled from "styled-components";

const Services = () => {
  return (
    <Section backgroundColor="#f4f5f6">
      <SectionTitle title="Why Choose Us" />
      <SectionContent content="We strive to make shipping easier, faster, secure and more convenient for you. Trust us to handle your packages with the utmost care and get them where they need to go - on time and in perfect condition" />
      <Grid>
        <Service
          imgSrc={transportIcon}
          imgAlt="icon of delivery van"
          title="Speedy Delivery"
          content="We strive to deliver your packages in the fastest time possible and with care"
        />
        <Service
          imgSrc={securityIcon}
          imgAlt="icon of cellphone with checkmark"
          title="Secure Shipping"
          content="We prioritise safety, so we always verify your packages to ensure you're the receiver"
        />
        <Service
          imgSrc={locationIcon}
          imgAlt="icon of cellphone with location"
          title="Full Tracking"
          content="Track and monitor your packages in real-time and know when they'll arrive"
        />
        <Service
          imgSrc={payIcon}
          imgAlt="icon of cash being handed over"
          title="Flexible Payments"
          content="Can't access any of our secure payments options? We also accept cash"
        />
      </Grid>

      <Link to="/services">
        <Button name="View All Services" />
      </Link>
    </Section>
  );
};

export default Services;

const Grid = styled.div`
  display: grid;
  gap: 16px;
  margin-bottom: 20px;

  @media ${devices.tablet} {
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr 1fr;
  }

  @media ${devices.laptop} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
  }
`;
