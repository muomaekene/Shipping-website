import truckIllustration from "../images/truck-illustration.png";

import Numbers from "./Numbers";
import BannerImage from "./BannerImage";
import BodyContent from "./BodyContent";
import ButtonLink from "./ButtonLink";

import { devices } from "../utils/breakpoints";
import styled from "styled-components";

const Banner = () => {
  return (
    <Container>
      <article className="banner-article">
        <h2 className="banner-title">
          Swift Solutions <br />
          Seamless Services <br />
          Tailored For You
        </h2>
        <BodyContent color="#d1cfcf">
          With our state-of-the-art logistics network and experienced team, we
          offer a comprehensive range of services tailored to your requirements
        </BodyContent>

        <ButtonLink url="/services" hex="#fff">
          Explore More
        </ButtonLink>

        <Numbers />
      </article>
      <BannerImage
        imgSrc={truckIllustration}
        imgAlt="Illustration of track with a driver in it"
      />
    </Container>
  );
};

export default Banner;

const Container = styled.article`
  display: flex;
  flex-direction: column;
  padding: 16px;
  background: #0e0e0e;

  @media ${devices.tablet} {
    flex-direction: row;
  }

  @media ${devices.laptop} {
    padding-left: 24px;
    padding-right: 24px;
    height: calc(100vh - 80px);
  }

  .banner-article {
    display: flex;
    flex-direction: column;

    @media ${devices.tablet} {
      width: 50%;
    }
  }

  .banner-title {
    font-family: "Raleway", sans-serif;
    text-transform: lowercase;
    font-size: 36px;
    color: #fff;
    margin-bottom: 10px;

    @media ${devices.mobileL} {
      font-size: 40px;
    }

    @media ${devices.laptop} {
      font-size: 46px;
      width: 90%;
    }

    /* @media ${devices.laptopL} {
      font-size: 54px;
    } */
  }
`;
