import styled from "styled-components";

const SectionImage = ({ imgSrc, imgAlt }) => {
  return <Image src={imgSrc} alt={imgAlt} />;
};

export default SectionImage;

const Image = styled.img`
  margin-bottom: 20px;
  width: 100%;
  height: auto;
  border-radius: 4px;
`;
