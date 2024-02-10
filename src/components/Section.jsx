import styled from "styled-components";

const Section = ({ backgroundColor, ...props }) => {
  console.log(backgroundColor);

  return <Container style={{ backgroundColor }}>{props.children}</Container>;
};

export default Section;

const Container = styled.section`
  width: 100%;
  padding: 20px;
`;
