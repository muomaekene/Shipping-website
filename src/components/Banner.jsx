import Button from "./Button";

import styled from "styled-components";
import { devices } from "../utils/breakpoints";

const Banner = () => {
  return (
    <Container>
      <article className="banner-article">
        <h2 className="banner-title">Take the first step to ship with us</h2>
        <p className="banner-content">
          We move and deliver freight from the Bay Area to the world in a
          breeze. Don't hesitate to reach out to us whenever you want to send
          packages across the world.
        </p>
        <Button name="Get A Quote" />
      </article>
    </Container>
  );
};

export default Banner;

const Container = styled.section`
  height: calc(100vh - 80px);
  background-image: url("https://images.unsplash.com/photo-1578163677454-b3933804a354?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-repeat: no-repeat;
  background-size: cover;

  .banner-article {
    padding: 20px;
    background: rgba(0, 0, 0, 0.5);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .banner-title {
    font-family: "Sen", sans-serif;
    text-transform: uppercase;
    font-weight: 400;
    font-style: normal;
    font-size: 36px;
    color: #fff;
    line-height: 1.1;

    @media ${devices.tablet} {
      width: 50%;
      font-size: 40px;
    }

    @media ${devices.laptop} {
      font-size: 44px;
      width: 45%;
    }

    @media ${devices.laptopL} {
      font-size: 46px;
    }
  }

  .banner-content {
    font-size: 16px;
    font-weight: 400;
    margin-top: 15px;
    margin-bottom: 20px;
    text-align: justify;
    color: #fff;

    @media ${devices.tablet} {
      width: 50%;
      font-size: 18px;
    }

    @media ${devices.laptop} {
      width: 45%;
    }
  }

  .banner-image {
    width: 100%;
    height: auto;
    object-fit: cover;

    @media ${devices.tablet} {
      width: 50%;
    }
  }
`;
