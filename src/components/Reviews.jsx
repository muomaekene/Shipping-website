import Section from "./Section";
import Review from "./Review";
import SectionTitle from "./SectionTitle";
import SectionContent from "./SectionContent";

import manSmiling1 from "../images/man-smiling-1.avif";
import manSmiling2 from "../images/man-smiling2.jpg";
import olderWoman from "../images/older-woman.jpg";

import { devices } from "../utils/breakpoints";

import styled from "styled-components";

const Reviews = () => {
  return (
    <Section backgroundColor="#f9f8ef">
      <SectionTitle title="What our customers are saying" />
      <SectionContent
        content="Some of our satistified customers have reached out and told us how they
        felt about our services. Here are some of the reviews we got:"
      />

      <Grid>
        <Review
          imgSrc={manSmiling1}
          imgAlt="Man 1"
          name="Jon Schumer"
          comment="Very knowledgeable about the market and helps us prepare our shipment to avoid issues and unnecessary delays."
        />
        <Review
          imgSrc={manSmiling2}
          imgAlt="Man 2"
          name="Randy Whitaker"
          comment="It's hard to find a prompt and reliable provider in this industry, but their team is an exception."
        />
        <Review
          imgSrc={olderWoman}
          imgAlt="woman 1"
          name="Olivia Porter"
          comment="This team thinks quickly on their feet and always figures out a way to make things happen."
        />
      </Grid>
    </Section>
  );
};

export default Reviews;

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
    gap: 20px;
  }
`;
