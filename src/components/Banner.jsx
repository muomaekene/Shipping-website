import goldenGate from "../images/golden-gate.jpeg";

import styled from "styled-components";

const Banner = () => {
  return (
    <Container>
      <div className="banner-top">
        <h2 className="banner-title">
          The Most Reliable Shipping Company in San Francisco.
        </h2>
        <p className="banner-subtitle">
          We move and deliver freight from the Bay Area to the world in a
          breeze. Don't hesitate to reach out to us whenever you want to send
          packages across the world.
        </p>
        <button className="banner-btn">Get a Quote</button>
      </div>
      <div className="banner-bottom">
        <img
          src={goldenGate}
          alt="golden-gate-bridge-ship"
          className="banner-img"
        />
      </div>
    </Container>
  );
};

export default Banner;

const Container = styled.section`
  .banner-top {
    background: #e6e6e6;
    padding: 20px 15px;
    display: flex;
    flex-direction: column;
  }
  .banner-title {
    font-size: 30px;
    font-weight: 600;
  }

  .banner-subtitle {
    font-size: 15px;
    font-weight: 400;
    margin: 10px 0;
  }

  .banner-btn {
    width: fit-content;
    padding: 5px 10px;
    background: lightblue;
    border: 1px solid black;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
  }

  .banner-bottom {
  }

  .banner-img {
    width: 100%;
    height: auto;
  }
`;
