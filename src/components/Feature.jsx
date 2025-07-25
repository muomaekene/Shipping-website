import BodyContent from "./BodyContent";
import SectionTitle from "./SectionTitle";
import SectionImage from "./SectionImage";
import ButtonLink from "./ButtonLink";

import { devices } from "../utils/breakpoints";

import styled from "styled-components";

const Feature = ({ title, content, buttonName, imgSrc, imgAlt, url }) => {
  return (
    <Flex>
      <div className="section-body">
        <SectionTitle color="#fff">{title}</SectionTitle>
        <BodyContent color="#b9b9bd">{content}</BodyContent>

        <ButtonLink url="/services" hex="#fff">
          {buttonName}
        </ButtonLink>
      </div>
      <div className="section-image">
        <SectionImage imgSrc={imgSrc} imgAlt={imgAlt} />
      </div>
    </Flex>
  );
};

export default Feature;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${devices.tablet} {
    flex-direction: row;
  }

  .section-body {
    width: 100%;
    margin-bottom: 30px;

    @media ${devices.tablet} {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-bottom: 0;
    }
  }

  .section-image {
    max-inline-size: 100%;
    block-size: auto;
    width: 100%;

    @media ${devices.tablet} {
      width: 50%;
    }
  }
`;
