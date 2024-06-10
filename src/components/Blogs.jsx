import cargoPlane from "../images/cargo-plane.jpg";
import wharehouse from "../images/wharehouse.jpg";
import doorstepDelivery from "../images/doorstep-delivery.jpg";

// import shipAtSea from "../images/ship-at-sea.jpg";
// import containers from "../images/containers.jpg";
// import semiTruck from "../images/semi-truck.jpg";

import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Blog from "./Blog";

import { devices } from "../utils/breakpoints";

import styled from "styled-components";

const Blogs = () => {
  return (
    <Section backgroundColor="#f2f0ea" idValue="news">
      <SectionHeader title="Blogs & Media" />

      <Grid>
        <Blog
          image={doorstepDelivery}
          imageAlt="Ship sailing at sea"
          title="For Individuals"
          content="We move freight of all sizes and quantity to over 120
          destinations all over the world"
        />
        <Blog
          image={cargoPlane}
          imageAlt="Container in a port"
          title="For Businesses"
          content="Our agents are experts in providing assistance to get goods cleared quickly"
        />
        <Blog
          image={wharehouse}
          imageAlt="Wharehouse operator"
          title="For Partners"
          content="We safely store and keep accurate records of goods of every size and quantity"
        />
      </Grid>
    </Section>
  );
};

export default Blogs;

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
`;
