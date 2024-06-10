import { devices } from "../utils/breakpoints";

import styled from "styled-components";

const BannerImage = ({ imgSrc, imgAlt }) => {
  return (
    <Container>
      <img src={imgSrc} alt={imgAlt} />;
    </Container>
  );
};

export default BannerImage;

const Container = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  border-radius: 4px;

  @media ${devices.tablet} {
    width: 50%;
    height: 100%;
    margin-top: 0;
  }
`;
