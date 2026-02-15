import styled from "styled-components";

const BodyContent = ({ color, children }) => {
  return <Paragraph style={{ color }}>{children}</Paragraph>;
};

export default BodyContent;

const Paragraph = styled.p`
  font-size: 20px;
  color: #2d3054;
  margin-bottom: 20px;
  line-height: 1.5;
`;
