import styled from "styled-components";

const SectionImage = ({ imgSrc, imgAlt }) => {
  return <Image src={imgSrc} alt={imgAlt} loading="lazy" />;
};

export default SectionImage;

const Image = styled.img`
  width: 100%;
  height: auto;
`;
