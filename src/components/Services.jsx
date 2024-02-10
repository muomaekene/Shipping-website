import shipAtSea from "../images/ship-at-sea.jpg";
import cargoPlane from "../images/cargo-plane.jpg";
import wharehouse from "../images/wharehouse.jpg";
import doorstepDelivery from "../images/doorstep-delivery.jpg";

import Section from "./Section";
import SectionTitle from "./SectionTitle";
import ArticleTitle from "./ArticleTitle";
import ArticleContent from "./ArticleContent";
import ArticleImage from "./ArticleImage";
import Button from "./Button";

import styled from "styled-components";

const Services = () => {
  return (
    <Section idValue="services" backgroundColor="#f1f3f5">
      <SectionTitle title="How Can We Help You?" />

      <Article>
        <ArticleImage imgSrc={shipAtSea} imgAlt="Ship sailing at sea" />
        <ArticleTitle title="International Freight Shipment of Every Size and Quantity" />
        <ArticleContent
          content="We move and deliver freight of all sizes and quantity to over 120
          destinations all over the world"
        />
      </Article>
      <Article>
        <ArticleImage imgSrc={cargoPlane} imgAlt="Cargo plane in airport" />
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
        <ArticleImage imgSrc={doorstepDelivery} imgAlt="Doorstep delivery" />
        <ArticleTitle title="Speedy and Convenient Doorstep Delivery" />
        <ArticleContent
          content="We move and deliver freight of all sizes and quantity to over 120
          destinations all over the world"
        />
      </Article>

      <Button name="View More Services" />
    </Section>
  );
};

export default Services;

const Article = styled.article``;
