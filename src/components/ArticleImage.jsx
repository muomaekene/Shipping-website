import styled from "styled-components";

const ArticleImage = ({ imgSrc, imgAlt }) => {
  return <Image src={imgSrc} alt={imgAlt} />;
};

export default ArticleImage;

const Image = styled.img`
  width: 100%;
  height: auto;
  border: 1px solid #b4b4b8;
  /* padding: 10px; */
  margin-bottom: 10px;
`;
