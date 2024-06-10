import styled from "styled-components";
import { devices } from "../utils/breakpoints";

const Section = ({ backgroundColor, ...props }) => {
  return (
    <Container id={props.idValue} style={{ backgroundColor }}>
      {props.children}
    </Container>
  );
};

export default Section;

const Container = styled.section`
  width: 100%;
  padding: 40px 20px;

  @media ${devices.laptop} {
    padding: 50px 60px;
  }

  @media ${devices.laptopL} {
    padding: 80px;
  }
`;
