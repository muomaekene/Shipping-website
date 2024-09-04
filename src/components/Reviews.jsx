import Review from "./Review";
import SectionTitle from "./SectionTitle";
import SectionContent from "./SectionContent";

import manSmiling1 from "../images/man-smiling-1.avif";
import manSmiling2 from "../images/man-smiling2.jpg";
import olderWoman from "../images/older-woman.jpg";
import blackWoman from "../images/black-woman.jpg";
import womanSmiling from "../images/woman-smiling.jpeg";

import { devices } from "../utils/breakpoints";

import styled from "styled-components";

const Reviews = () => {
  return (
    <Container>
      <SectionTitle title="What our customers are saying" />
      <SectionContent
        content="Some of our satistified customers have reached out and told us how they
        felt about our services. Here are some of the reviews we got:"
      />

      <Grid>
        <Review
          imgSrc={manSmiling1}
          imgAlt="Man 1"
          name="David Payne"
          comment="Very knowledgeable about the market and helps us prepare our shipment to avoid issues and unnecessary delays."
        />
        <Review
          imgSrc={womanSmiling}
          imgAlt="Man 2"
          name="Mary Gonzalez"
          comment="Everything worked out as I hoepd - and it was all so easy. I especially loved the remarkable fast transit time."
        />
        <Review
          imgSrc={manSmiling2}
          imgAlt="Man 2"
          name="Richard Miller"
          comment="It's hard to find a prompt and reliable provider in this industry, but their team is an exception."
        />
        <Review
          imgSrc={blackWoman}
          imgAlt="woman 1"
          name="Linh Hampton"
          comment="I'm so pleased with Expedit. I just picked up my shipment, and everything is fine. I highly recommend this company."
        />
        <Review
          imgSrc={olderWoman}
          imgAlt="woman 1"
          name="Lori Simpson"
          comment="This team thinks quickly on their feet and always figures out a way to make things happen."
        />
      </Grid>
    </Container>
  );
};

export default Reviews;

const Container = styled.div`
  padding: 24px 16px;

  @media ${devices.laptop} {
    padding: 40px 24px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 95%;
  gap: 16px;

  overflow-x: auto;
  overscroll-behavior-inline: contain;
  scrollbar-width: none;

  padding: 5px 10px 10px 5px;

  @media ${devices.tablet} {
    grid-auto-columns: 45%;
  }

  @media ${devices.laptop} {
    grid-auto-columns: 35%;
    gap: 20px;
  }

  @media ${devices.laptopL} {
    grid-auto-columns: 30%;
  }
`;
