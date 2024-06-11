import SectionTitle from "./SectionTitle";
import BodyContent from "./BodyContent";
import Section from "./Section";
import SectionImage from "./SectionImage";
import Button from "./Button";

import deliveryPeople from "../images/delivery-people.jpg";
import manWriting from "../images/man-writing.jpg";
import manInStore from "../images/man-in-store.jpg";

import styled from "styled-components";

import { devices } from "../utils/breakpoints";

const Careers = () => {
  return (
    <Section backgroundColor="#f9f8ef" idValue="careers">
      <Flex>
        <div className="flex-item-1">
          <SectionTitle title="Become A Part of Our Team" />
          <BodyContent content="Interested in building a career while making an impact in a fast developing and connected world? Meet our people, see where we work and join a diverse, dynamic and growing organization that continually invests in advancing your skills and professional opportunites while contributing something meaningful to the modern world." />
          <BodyContent content="EXPEDY is home and every staff is a member of a big and diverse family of innovative service providers. Check out our job openings and see where you can come in." />
          <Button name="Find Opportunities" />
        </div>

        <div className="flex-item-2">
          <SectionImage imgSrc={deliveryPeople} imgAlt="delivering items" />
          <SectionImage imgSrc={manWriting} imgAlt="man writing" />
          <SectionImage imgSrc={manInStore} imgAlt="man inspecting store" />
        </div>
      </Flex>
    </Section>
  );
};

export default Careers;

const Flex = styled.div`
  display: block;

  @media ${devices.tablet} {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
  }

  @media ${devices.laptop} {
    gap: 60px;
  }

  .flex-item-1 {
    flex: 2;
    margin-bottom: 20px;
  }

  .flex-item-2 {
    flex: 1;
  }
`;
