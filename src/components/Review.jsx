import ArticleContent from "./ArticleContent";
import starIcon from "./../images/star.png";

import { devices } from "../utils/breakpoints";
import styled from "styled-components";

const Review = ({ name, comment, imgSrc, imgAlt }) => {
  return (
    <Article>
      <div className="stars">
        <img width="20" height="20" src={starIcon} alt="star icon" />
        <img width="20" height="20" src={starIcon} alt="star icon" />
        <img width="20" height="20" src={starIcon} alt="star icon" />
        <img width="20" height="20" src={starIcon} alt="star icon" />
      </div>

      <ArticleContent content={comment} />

      <div className="details">
        <div className="image">
          <img height="30" src={imgSrc} alt={imgAlt} />
        </div>
        <h4>{name}</h4>
      </div>
    </Article>
  );
};

export default Review;

const Article = styled.article`
  margin-top: 20px;
  border-radius: 4px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #fff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  @media ${devices.tablet} {
    margin: 0;
  }

  .stars {
    display: flex;
    margin-bottom: 10px;
    gap: 5px;
  }

  h4 {
    font-weight: 400;
    color: #1d2b53;
    font-size: 18px;

    @media ${devices.laptop} {
      font-size: 20px;
    }

    @media ${devices.laptopL} {
      font-size: 22px;
    }
  }

  .details {
    margin-top: 20px;
    display: flex;
    align-items: center;
  }

  .image {
    height: 35px;
    width: 35px;
    border-radius: 30px;
    margin-right: 10px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 4px;
    }
  }
`;
