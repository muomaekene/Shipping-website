import { devices } from "../utils/breakpoints";

import martenLogo from "../images/marten.png";
import styled from "styled-components";

const Partners = () => {
  return (
    <Container>
      <h3 className="title">Our Official Partners</h3>
      <div className="images">
        <img
          src="https://www.maersk.com/~/media_sc9/maersk/homepage/brands/svitzer.svg"
          alt="partner-logo"
          width="200"
        />
        <img src={martenLogo} alt="partner-logo" width="400" />
        <img
          src="https://www.maersk.com/~/media_sc9/maersk/homepage/brands/apm-terminals_pos.svg"
          alt="partner-logo"
          width="400"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/9d/FedEx_Express.svg"
          alt="partner-logo"
          width="200"
        />

        <img
          src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Maersk_Group_Logo.svg"
          alt="partner-logo"
          width="300"
        />
      </div>
    </Container>
  );
};

export default Partners;

const Container = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    margin: 20px 0;
    font-size: 30px;
    font-family: "Raleway", sans-serif;
    color: #3d528a;
    text-transform: lowercase;
    letter-spacing: -1px;

    @media ${devices.tablet} {
      font-size: 34px;
      margin-bottom: 10px;
    }

    @media ${devices.laptopL} {
      font-size: 40px;
    }
  }

  .images {
    padding: 20px;
    overflow: auto;
    scrollbar-width: none;
    display: flex;
    gap: 30px;
  }

  img {
    height: 120px;
    padding: 0 10px;
  }
`;
