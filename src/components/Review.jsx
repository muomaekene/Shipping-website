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
        <p className="review">
          <span>"</span>
          {comment}
          <span>"</span>
        </p>
        <p className="customer-name">{name}</p>
      </div>
    </Article>
  );
};

export default Review;

const Article = styled.article`
  margin: 20px 0;
  border: 1px solid black;
  padding: 15px;
  background: #fff;

  .image-cover {
    display: flex;
    justify-content: center;
  }
  .customer-image {
    border: 1px solid black;
    margin-bottom: 10px;
    object-fit: cover;
  }

  .customer-name {
    font-weight: 500;
    margin-top: 10px;
    font-size: 14px;
    text-transform: <caption></caption>;
  }

  .review {
    text-align: center;
    font-weight: 300;
    font-size: 14px;
  }

  span {
    font-size: 20px;
    font-weight: 500;
  }
`;
