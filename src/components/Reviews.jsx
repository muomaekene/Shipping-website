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
      <Title>Over 50 000 People Have Trusted Us With Their Shipping.</Title>
      <Paragraph>
        Some of our satistified customers have reached out and told us how the
        felt about our services. Here are some of the things they had to say
      </Paragraph>

      <Grid>
        <Review
          image={manSmiling1}
          name="Jon Schumer"
          comment="I get my packages in the right conditions and on time. SHIPPN is very reliable and consistent"
        />
        <Review
          image={manSmiling2}
          name="Randy Whitaker"
          comment="Before I started using SHIPPN I had problems with hidden charges and complicated shipping processes. Now I clear packages with ease and at more affordable costs"
        />
        <Review
          image={olderWoman}
          name="Olivia Porter"
          comment="I've had to escape customs hassles and very high duties because I use SHIPPN."
        />
        <Review
          image={blackWoman}
          name="Aisha Jordan"
          comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          recusandae non molestiae quis unde qui architecto, velit, quae quia,
          obcaecati soluta!"
        />
      </Grid>
    </Section>
  );
};

export default Reviews;

const Title = styled.h4`
  font-size: 18px;
  font-family: "Overpass", sans-serif;
  font-weight: 400;
  text-align: left;
  color: #d90429;

  @media ${devices.tablet} {
    font-size: 22px;
    width: 60%;
  }

  @media ${devices.laptop} {
    font-size: 24px;
  }
`;

const Paragraph = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #445069;
  margin-bottom: 20px;

  @media ${devices.tablet} {
    font-size: 16px;
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
