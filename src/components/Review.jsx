import { devices } from "../utils/breakpoints";

import styled from "styled-components";

const Review = ({ image, name, comment }) => {
  return (
    <Article>
      <div className="image-cover">
        <img
          src={image}
          width="100"
          height="100"
          alt="customer-1"
          className="customer-image"
        />
      </div>
      <div className="review-group">
        <p className="review">{comment}</p>
        <p className="customer-name">{name}</p>
      </div>
    </Article>
  );
};

export default Review;

const Article = styled.article`
  margin-top: 20px;
  border: 1px solid #b4b4b8;
  border-radius: 4px;
  padding: 15px;
  color: #445069;

  @media ${devices.tablet} {
    margin: 0;
  }

  .image-cover {
    display: flex;
    justify-content: center;
  }

  .customer-image {
    border: 1px solid #b4b4b8;
    object-fit: cover;
  }

  .customer-name {
    font-weight: 600;
    font-size: 16px;

    @media ${devices.tablet} {
      font-size: 18px;
    }
  }

  .review-group {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .review {
    font-weight: 400;
    font-size: 16px;
    margin: 10px 0;

    @media ${devices.tablet} {
      font-size: 18px;
    }
  }
`;
