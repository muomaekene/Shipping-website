import shipAtSea from "../images/ship-at-sea.jpg";
import cargoPlane from "../images/cargo-plane.jpg";
import containers from "../images/containers.jpg";
import wharehouse from "../images/wharehouse.jpg";
import doorstepDelivery from "../images/doorstep-delivery.jpg";
import semiTruck from "../images/semi-truck.jpg";

import Section from "./Section";
import SectionTitle from "./SectionTitle";
import ArticleTitle from "./ArticleTitle";
import ArticleContent from "./ArticleContent";
import ArticleImage from "./ArticleImage";
import Button from "./Button";

import { devices } from "../utils/breakpoints";

import styled from "styled-components";

const Services = () => {
  return (
    <Section idValue="services" backgroundColor="">
      <SectionTitle title="Our range of services and solutions" />

      <Grid>
        <Article>
          <ArticleImage imgSrc={shipAtSea} imgAlt="Ship sailing at sea" />
          <ArticleTitle title="International Freight Shipment" />
          <ArticleContent
            content="We move and deliver freight of all sizes and quantity to over 120
          destinations all over the world"
          />
        </Article>
        <Article>
          <ArticleImage imgSrc={containers} imgAlt="Container in a port" />
          <ArticleTitle title="Clearing and Forwarding" />
          <ArticleContent
            content="We move and deliver freight of all sizes and quantity to over 120
          destinations all over the world"
          />
        </Article>
        <Article>
          <ArticleImage imgSrc={wharehouse} imgAlt="Wharehouse operator" />
          <ArticleTitle title="Storage and Inventory Management" />
          <ArticleContent
            content="We move and deliver freight of all sizes and quantity to over 120
          destinations all over the world"
          />
        </Article>
        <Article>
          <ArticleImage imgSrc={semiTruck} imgAlt="Doorstep delivery" />
          <ArticleTitle title="Road Freight Haulage" />
          <ArticleContent
            content="We move and deliver freight of all sizes and quantity to over 120
          destinations all over the world."
          />
        </Article>
        <Article>
          <ArticleImage imgSrc={cargoPlane} imgAlt="Cargo plane at airport" />
          <ArticleTitle title="Air Freight Haulage" />
          <ArticleContent
            content="We move and deliver freight of all sizes and quantity to over 120
          destinations all over the world."
          />
        </Article>
        <Article>
          <ArticleImage imgSrc={doorstepDelivery} imgAlt="Doorstep delivery" />
          <ArticleTitle title="Speedy Doorstep Delivery" />
          <ArticleContent
            content="We move and deliver freight of all sizes and quantity to over 120
          destinations all over the world."
          />
        </Article>
      </Grid>

      <Button name="View More Services" />
    </Section>
  );
};

export default Services;

const Article = styled.article`
  margin-bottom: 20px;
  border: 1px solid #b4b4b8;
  border-radius: 4px;
  padding: 10px;

  @media ${devices.tablet} {
    display: flex;
    flex-direction: column;
  }

  @media ${devices.tablet} {
    margin-bottom: 0;
  }
`;

const Grid = styled.div`
  display: block;
  margin-bottom: 20px;

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
