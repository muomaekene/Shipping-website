import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Blog from "./Blog";

import cargoPlane from "../images/cargo-plane.jpg";
import partners from "../images/partners.jpg";
import deliveryPerson from "../images/delivery-person.jpg";

import { devices } from "../utils/breakpoints";

import styled from "styled-components";

const Blogs = () => {
  return (
    <Section backgroundColor="#f4f5f6" idValue="news">
      <SectionHeader title="Blogs & Media" />
      <Grid>
        <Blog
          image={deliveryPerson}
          imageAlt="Customer handed a delivery package"
          title="For Individuals"
          content="We deliver packages of varying sizes and quantity to and from every state in contiguous USA."
        />
        <Blog
          image={cargoPlane}
          imageAlt="Businessmen and women at a table"
          title="For Businesses"
          content="Our agents are experts in providing assistance to get goods cleared quickly no matter the quantity."
        />
        <Blog
          image={partners}
          imageAlt="Two men shaking hands"
          title="For Partners"
          content="Working with us to deliver quality services to our clients means a lot to us, so we play our part well."
        />
      </Grid>
    </Section>
  );
};

export default Blogs;

const Grid = styled.div`
  display: grid;
  gap: 16px;

  @media ${devices.tablet} {
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media ${devices.laptop} {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
  }
`;
