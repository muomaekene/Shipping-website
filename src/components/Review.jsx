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
        <img width="20" height="20" src={starIcon} alt="star icon" />
      </div>

      <ArticleContent content={comment} />

      <div className="details">
        <div className="image">
          <img src={imgSrc} alt={imgAlt} />
        </div>
        <h4>{name}</h4>
      </div>
    </Article>
  );
};

export default Review;

const Article = styled.article`
  border-radius: 4px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #fff;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;

  @media ${devices.tablet} {
    margin: 0;
  }

  .stars {
    display: flex;
    margin-bottom: 20px;
    gap: 5px;
  }

  h4 {
    font-weight: 400;
    color: #162a60;
    font-size: 17px;

    @media ${devices.laptop} {
      font-size: 18px;
    }

    @media ${devices.laptopL} {
      font-size: 19px;
    }
  }

  .details {
    margin-top: 20px;
    display: flex;
    align-items: center;
  }

  .image {
    height: 50px;
    width: 50px;
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
