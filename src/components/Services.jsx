import shipAtSea from "../images/ship-at-sea.jpg";
import cargoPlane from "../images/cargo-plane.jpg";
import wharehouse from "../images/wharehouse.jpg";
import doorstepDelivery from "../images/doorstep-delivery.jpg";

import SectionTitle from "./SectionTitle";
import GroupTitle from "./GroupTitle";
import GroupContent from "./GroupContent";

import styled from "styled-components";
import GroupButton from "./GroupButton";

const Services = () => {
  return (
    <Container>
      <SectionTitle title="How Can We Help You?" />

      <article className="item-group">
        <img src={shipAtSea} alt="Ship sailing at sea" className="image" />
        <GroupTitle title="International Freight Shipment of Every Size and Quantity" />
        <GroupContent
          content="We move and deliver freight of all sizes and quantity to over 120
          destinations all over the world"
        />
      </article>

      <article className="item-group">
        <img src={cargoPlane} alt="Cargo plane in airport" className="image" />
        <GroupTitle title="Clearing and Forwarding" />
        <GroupContent
          content="We move and deliver freight of all sizes and quantity to over 120
          destinations all over the world"
        />
      </article>

      <article className="item-group">
        <img src={wharehouse} alt="Wharehouse operator" className="image" />
        <GroupTitle title="Storage and Inventory Management" />
        <GroupContent
          content="We move and deliver freight of all sizes and quantity to over 120
          destinations all over the world"
        />
      </article>

      <article className="item-group">
        <img src={doorstepDelivery} alt="Doorstep delivery" className="image" />
        <GroupTitle title="Speedy and Convenient Doorstep Delivery" />
        <GroupContent
          content="We move and deliver freight of all sizes and quantity to over 120
          destinations all over the world"
        />
      </article>
      <GroupButton name="View More Services" />
    </Container>
  );
};

export default Services;

const Container = styled.section`
  background: #f1f3f5;
  width: 100%;
  padding: 20px;

  .item-group {
    margin-top: 30px;
  }

  .image {
    width: 100%;
    height: auto;
    border: 1px solid black;
    padding: 10px;
    margin-bottom: 10px;
  }
`;
