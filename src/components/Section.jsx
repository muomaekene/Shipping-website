import { devices } from "../utils/breakpoints";
import styled from "styled-components";

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
  padding: 24px 16px;

  @media ${devices.laptop} {
    padding: 40px 24px;
  }
`;
