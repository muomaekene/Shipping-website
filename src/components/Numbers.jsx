import { devices } from "../utils/breakpoints";

import styled from "styled-components";

const Numbers = () => {
  return (
    <Container>
      <div className="testimonial">
        <div className="number">+1m</div>
        <div className="desc">Deliveries</div>
      </div>

      <div className="testimonial">
        <div className="number">+102k</div>
        <div className="desc">Customers</div>
      </div>

      <div className="testimonial">
        <div className="number">+1.5k</div>
        <div className="desc">Reviews</div>
      </div>
    </Container>
  );
};

export default Numbers;

const Container = styled.div`
  margin: 30px 0;
  display: flex;
  gap: 35px;

  .number {
    color: #f5f7ff;
    font-size: 22px;
    font-family: "REM", sans-serif;

    @media ${devices.laptop} {
      font-size: 24px;
    }

    @media ${devices.laptopL} {
      font-size: 26px;
    }
  }

  .desc {
    color: #c1c1c6;
    font-size: clamp(1.125rem, 1.05rem + 0.5vw, 1.375rem);
  }
`;
