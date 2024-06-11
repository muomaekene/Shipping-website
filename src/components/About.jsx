import Section from "./Section";
import SectionTitle from "./SectionTitle";
import BodyContent from "./BodyContent";

import styled from "styled-components";

import { devices } from "../utils/breakpoints";
import Button from "./Button";

const About = () => {
  return (
    <Section backgroundColor="#f4f5f6" idValue="about">
      <Flex>
        <div className="flex-item-1">
          <video autoPlay playsInline controls>
            <source
              src="https://cdn.pixabay.com/video/2020/10/28/53582-475000650_large.mp4"
              type="video/mp4"
            />
            <source src="movie.ogg" type="video/ogg" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="flex-item-2">
          <div className="top-title">ELEVATING THE FUTURE</div>
          <SectionTitle title="The Journey of A Thousand Successful Shipments Begins Here" />
          <BodyContent content="EXPEDI Shipping Co. is a trans-national forwarder specialized in managing your shipments from one destination to another. We design and implement industry-leading solutions together with our nationwide network of partners. " />
          <BodyContent content="With over 50+ dedicated employees, working around the country, we deliver operational excellence to provide viable solutions to the most challenging supply chain questions. Therefore, most of our clients see us as one of the best logistics companies in the United States." />
          <BodyContent content="Our focus on providing excellence and value to our customers is made possible by our team of experts who bring passion to their work. We are totally commited to meeting and exceeding our customers' expectations" />
          <Button name="Learn More" />
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
    gap: 40px;
  }

  @media ${devices.laptop} {
    gap: 60px;
  }

  .flex-item-1 {
    flex: 1;
    margin-bottom: 20px;
  }

  .flex-item-2 {
    flex: 1;
  }

  .top-title {
    font-size: 16px;
    font-weight: 400;

    @media ${devices.laptop} {
      font-size: 18px;
    }

    @media ${devices.laptop} {
      font-size: 20px;
    }
  }

  video {
    display: block;
    border-radius: 4px;
    max-height: 100%;
    width: 100%;
    border: 1px solid #706f6f;
  }
`;
