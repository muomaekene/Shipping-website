import truckIllustration from "../images/truck-illustration.png";

import { devices } from "../utils/breakpoints";
import styled from "styled-components";
import Button from "./Button";
import Numbers from "./Numbers";
import BannerImage from "./BannerImage";
import BodyContent from "./BodyContent";

const Banner = () => {
  return (
    <Container>
      <article className="banner-article">
        <h2 className="banner-title">
          Swift Solutions <br />
          Seamless Services <br />
          Tailored For You
        </h2>
        <BodyContent
          color="#a0a0a4"
          content=" With our state-of-the-art logistics network and experienced team, we offer a comprehensive range of services tailored to your requirements. "
        />
        <Button name="Explore Now" />
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

const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 20px;

  @media ${devices.tablet} {
    flex-direction: row;
    height: calc(100vh - 60px);
  }

  @media ${devices.laptop} {
    padding-left: 60px;
    padding-right: 60px;
  }

  @media ${devices.laptopL} {
    padding-left: 100px;
    padding-right: 100px;
  }

  .banner-article {
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media ${devices.tablet} {
      width: 50%;
    }
  }

  .banner-title {
    font-family: "Raleway", sans-serif;
    text-transform: capitalize;
    font-size: 34px;
    color: #fff;
    margin-bottom: 10px;

    @media ${devices.mobileL} {
      font-size: 38px;
    }

    @media ${devices.laptop} {
      font-size: 42px;
      width: 90%;
    }

    @media ${devices.laptopL} {
      font-size: 50px;
    }
  }

  .banner-content {
    font-size: 16px;
    color: #a0a0a4;
    margin-top: 10px;
    margin-bottom: 15px;
    line-height: 1.5;

    @media ${devices.laptop} {
      font-size: 18px;
    }

    @media ${devices.laptopL} {
      font-size: 20px;
    }
  }
`;
