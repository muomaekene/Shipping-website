import menInWharehouse from "../images/men-in-wharehouse.jpg";

import Section from "./Section";
import SectionImage from "./SectionImage";
import SectionTitle from "./SectionTitle";
import ArticleTitle from "./ArticleTitle";
import ArticleContent from "./ArticleContent";
import GroupButton from "./Button";

import styled from "styled-components";

import { devices } from "../utils/breakpoints";

const About = () => {
  return (
    <Section backgroundColor="" idValue="about">
      <SectionTitle title="Our company profile" />

      <Flex>
        <div className="flex-item-1">
          <SectionImage
            imgSrc={menInWharehouse}
            imgAlt="Men standing in wharehouse"
          />
        </div>
        <div className="flex-item-2">
          <ArticleTitle title="We Are Global Leaders and Innovators in the Logistics and Shipping Business" />
          <ArticleContent content="EXPEDY Shipping Co. is an international forwarder specialized in managing your shipments from one destination to another. We design and implement industry-leading solutions together with our worldwide network of partners." />
          <ArticleContent content="With over 100+ dedicated employees, working around the globe, we deliver operational excellence to provide viable solutions to the most challenging supply chain questions. Therefore, most of our clients see us as one of the best logistics companies in the United States." />
          <ArticleContent content="Our focus on providing excellence and value to our customers is made possible by our team of experts who bring passion to their work. We are totally committed to meeting and exceeding our customers' expectations." />
          <ArticleContent content="EXPEDY Shipping Co. was established in 2019 and has since been a leading shipping services provider. We have built a reputation of reliability in shipping of goods and parcels nationally and internationally due to ourprofessional approach, competitive pricing and large network." />
          <ArticleContent content="With the quality of services we have rendered since we were founded, we have become the most preferred shipper in the Bay Area and the entire California" />
          <GroupButton name="Learn More" />
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
    }

    .flex-item-2 {
      flex: 1;
      margin-left: 20px;

      @media ${devices.laptop} {
        margin-left: 20px;
      }
    }
  }
`;
