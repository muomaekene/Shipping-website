import { devices } from "../utils/breakpoints";
import styled from "styled-components";

const Section = ({ children, hex }) => {
  return <Container style={{ background: hex }}>{children}</Container>;
};

export default Section;

const Container = styled.section`
  width: 100%;
  padding: 30px 15px 20px 15px;
`;
