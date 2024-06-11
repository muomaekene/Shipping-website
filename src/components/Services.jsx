import Section from "./Section";
import SectionTitle from "./SectionTitle";
import SectionContent from "./SectionContent";
import ArticleTitle from "./ArticleTitle";
import ArticleContent from "./ArticleContent";

import payIcon from "../images/pay.png";
import locationIcon from "../images/location.png";
import securityIcon from "../images/security.png";
import transportIcon from "../images/transport.png";

import { devices } from "../utils/breakpoints";

import styled from "styled-components";

const Services = () => {
  return (
    <Section backgroundColor="#f4f5f6" idValue="services">
      <SectionTitle title="Why Choose Us" />
      <SectionContent content="We are a US-based freight moving and OTR trucking company that offers Roll-On-Roll-Off services, which is the simplest and cheapest way to get your packages across the country in the shortest time possible" />

      <Grid>
        <div className="grid-item">
          <img
            src={transportIcon}
            width="70"
            height="70"
            alt="icon of delivery van"
          />
          <ArticleTitle title="Fastest Service" />
          <ArticleContent content="We deliver your items on the same day, especially if you live nearby" />
        </div>

        <div className="grid-item">
          <img
            src={securityIcon}
            width="70"
            height="70"
            alt="icon of cellphone with checkmark"
          />
          <ArticleTitle title="OTP Confirmation" />
          <ArticleContent content="Security is our priority. We verify your packages so we are sure you're the one receiving them" />
        </div>
        <div className="grid-item">
          <img
            src={locationIcon}
            width="70"
            height="70"
            alt="icon of cellphone with location"
          />
          <ArticleTitle title="Full Tracking" />
          <ArticleContent content="You can track your packages and find out when you'll receive them" />
        </div>
        <div className="grid-item">
          <img
            src={payIcon}
            width="70"
            height="70"
            alt="icon of cash being handed over"
          />
          <ArticleTitle title="Cash on Delivery" />
          <ArticleContent content="Can't access any of our secure payments options? We also accept cash" />
        </div>
      </Grid>
    </Section>
  );
};

export default Services;

const Grid = styled.div`
  display: block;

  @media ${devices.tablet} {
    gap: 20px;
    display: grid;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr 1fr;
  }

  @media ${devices.laptop} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  .grid-item {
    border-radius: 4px;
    padding: 0 20px;
    margin-top: 20px;
    height: 17rem;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    img {
      margin-bottom: 20px;
    }
  }
`;
