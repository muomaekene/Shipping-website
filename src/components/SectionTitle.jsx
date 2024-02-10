import React from "react";
import styled from "styled-components";

const SectionTitle = ({ title }) => {
  return <Container>{title}</Container>;
};

export default SectionTitle;

const Container = styled.h3`
  font-size: 16px;
  font-weight: 400;
  margin: 20px 0;
  display: flex;
  justify-content: center;
`;
