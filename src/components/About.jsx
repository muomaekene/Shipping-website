import Section from "./Section";
import SectionTitle from "./SectionTitle";
import BodyContent from "./BodyContent";

import styled from "styled-components";

import { devices } from "../utils/breakpoints";

const About = () => {
  return (
    <Section backgroundColor="#f0f6fc" idValue="about">
      <Flex>
        <div className="flex-item-1">
          <SectionTitle title="We Provide Services That You Can Rely On & Be Totally Satified With" />
        </div>

        <div className="flex-item-2">
          <BodyContent content="EXPEDY Shipping Co. is an international forwarder specialized in managing your shipments from one destination to another. We design and implement industry-leading solutions together with our worldwide network of partners. " />
          <BodyContent content="With over 100+ dedicated employees, working around the globe, we deliver operational excellence to provide viable solutions to the most challenging supply chain questions. Therefore, most of our clients see us as one of the best logistics companies in the United States." />
        </div>
      </Flex>
    </Section>
  );
};

export default About;

const Flex = styled.div`
  display: block;

  @media ${devices.tablet} {
    display: flex;
    flex-wrap: wrap;

    .flex-item-1 {
      flex: 1;
      margin-right: 20px;
    }

    .flex-item-2 {
      flex: 1;
    }
  }
`;
