import styled from "styled-components";

const BodyContent = ({ color, children }) => {
  return <Paragraph style={{ color }}>{children}</Paragraph>;
};

export default BodyContent;

const Paragraph = styled.p`
  font-size: 18px;
  color: #26284a;
  margin-bottom: 20px;
  line-height: 1.5;
`;
