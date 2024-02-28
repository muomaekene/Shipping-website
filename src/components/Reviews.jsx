import Section from "./Section";
import Review from "./Review";

import manSmiling1 from "../images/man-smiling-1.avif";
import manSmiling2 from "../images/man-smiling2.jpg";
import olderWoman from "../images/older-woman.jpg";
import blackWoman from "../images/black-woman-smiling.jpg";

import { devices } from "../utils/breakpoints";

import styled from "styled-components";

const Reviews = () => {
  return (
    <Section>
      <Title>Over 50 000 People Have Trusted Us With Their Shipping</Title>
      <Paragraph>
        Some of our satistified customers have reached out and told us how the
        felt about our services. Here are some of the things they had to say
      </Paragraph>

      <Grid>
        <Review
          image={manSmiling1}
          name="Jon Schumer"
          comment="EXPEDY SHIPPING is very knowledgeable about the market and helps us prepare our shipment to avoid issues."
        />
        <Review
          image={manSmiling2}
          name="Randy Whitaker"
          comment="It's hard to find a prompt and reliable provider in this industry, but their team is an exception."
        />
        <Review
          image={olderWoman}
          name="Olivia Porter"
          comment="This team thinks quickly on their feet and always figures out a way to make things happen."
        />
        <Review
          image={blackWoman}
          name="Aisha Jordan"
          comment="They were highly responsive whenever we had any requests or concerns."
        />
      </Grid>
    </Section>
  );
};

export default Reviews;

const Title = styled.h4`
  font-size: 20px;
  font-family: "Sen", sans-serif;
  font-weight: 400;
  text-align: left;
  color: #d90429;
  margin-bottom: 10px;
  letter-spacing: -1px;

  @media ${devices.tablet} {
    font-size: 24px;
    width: 60%;
  }

  @media ${devices.laptop} {
    font-size: 26px;
  }
`;

const Paragraph = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #445069;
  margin-bottom: 20px;

  @media ${devices.tablet} {
    font-size: 18px;
    width: 60%;
  }
`;

const Grid = styled.div`
  display: block;

  @media ${devices.tablet} {
    display: grid;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  @media ${devices.laptop} {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media ${devices.laptopL} {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
  }
`;
