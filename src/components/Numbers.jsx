import { devices } from "../utils/breakpoints";

import styled from "styled-components";

const Numbers = () => {
  return (
    <Container>
      <div className="testimonial">
        <div className="number">+100k</div>
        <div className="desc">Deliveries</div>
      </div>

      <div className="testimonial">
        <div className="number">60k</div>
        <div className="desc">Customers</div>
      </div>

      <div className="testimonial">
        <div className="number">+15k</div>
        <div className="desc">Reviews</div>
      </div>
    </Container>
  );
};

export default Numbers;

const Container = styled.div`
  margin: 30px 0;
  display: flex;
  gap: 30px;

  .number {
    color: #fff;
    font-size: 22px;

    @media ${devices.laptop} {
      font-size: 24px;
    }

    @media ${devices.laptopL} {
      font-size: 28px;
    }
  }

  .desc {
    color: #a0a0a4;
    font-size: 16px;

    @media ${devices.laptop} {
      font-size: 17px;
    }

    @media ${devices.laptopL} {
      font-size: 18px;
    }
  }
`;
