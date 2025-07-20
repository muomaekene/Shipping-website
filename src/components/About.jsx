import Section from "./Section";
import SectionTitle from "./SectionTitle";
import BodyContent from "./BodyContent";
import ButtonLink from "./ButtonLink";

import seaport from "../images/seaport.jpg";

import { devices } from "../utils/breakpoints";
import styled from "styled-components";

const About = () => {
  return (
    <Section>
      <Flex>
        <div className="flex-item-1">
          <img src={seaport} alt="Ship at seaport" />
        </div>

        <div className="flex-item-2">
          <SectionTitle>
            The Journey of A million Successful Shipments Begins With One
          </SectionTitle>

          <BodyContent>
            EXPEDIT Shipping Co. is a trans-national shipping and truck services
            company. We design and implement industry-leading solutions together
            with our nationwide network of partners
          </BodyContent>
          <BodyContent>
            With over 50+ dedicated employees working around the country, we
            deliver operational excellence to provide viable solutions to the
            most challenging supply chain questions. Therefore, most of our
            clients see us as one of the best logistics companies in the United
            States
          </BodyContent>
          <BodyContent>
            Our focus on providing excellence and value to our customers is made
            possible by our team of experts who bring passion to their work. We
            are totally commited to meeting and exceeding our customers'
            expectations
          </BodyContent>

          <ButtonLink url="/about" hex="#162a60">
            Learn More
          </ButtonLink>
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

  .flex-item-1 {
    flex: 1;
    margin-bottom: 20px;
  }

  .flex-item-2 {
    flex: 1;
  }

  .top-title {
    font-size: 16px;
    color: #162a60;
    margin-bottom: 5px;
    text-decoration: underline;
    text-decoration-thickness: 1px;

    @media ${devices.laptop} {
      font-size: 17px;
    }

    @media ${devices.laptopL} {
      font-size: 18px;
    }
  }

  img {
    display: block;
    max-height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;
