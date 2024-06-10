import Button from "./Button";
import Section from "./Section";
import BodyContent from "./BodyContent";
import SectionTitle from "./SectionTitle";
import SectionImage from "./SectionImage";

import calculatorCaute from "../images/calculator-cuate.png";

import { devices } from "../utils/breakpoints";

import styled from "styled-components";

const Quote = () => {
  return (
    <Section backgroundColor="#000">
      <Flex>
        <div className="section-body">
          <SectionTitle color="#fff" title="Get An Instant Quote" />
          <BodyContent
            color="#a0a0a4"
            content="You shouldn't break the bank to move freight across the country. Use our simple quote estimator to find out how much it'd cost you to ship with us."
          />
          <Button name="Calculate Price" />
        </div>

        <SectionImage
          imgSrc={calculatorCaute}
          imgAlt="Illustration of guy holding a calculator"
        />
      </Flex>
    </Section>
  );
};

export default Quote;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${devices.tablet} {
    flex-direction: row;
  }

  .section-body {
    width: 100%;

    @media ${devices.tablet} {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  img {
    max-inline-size: 100%;
    block-size: auto;
    width: 100%;

    @media ${devices.tablet} {
      width: 50%;
    }
  }
`;
