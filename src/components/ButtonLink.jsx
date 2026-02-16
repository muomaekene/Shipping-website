import { Link } from "react-router-dom";
import { devices } from "../utils/breakpoints";

import styled from "styled-components";

const ButtonLink = ({ url, hex, children }) => {
  return (
    <StyledLink to={url}>
      <button style={{ color: hex }}>{children}</button>
    </StyledLink>
  );
};

export default ButtonLink;

const StyledLink = styled(Link)`
  display: inline-block;

  button {
    width: fit-content;
    font-size: clamp(1rem, 1rem + 0.5vw, 1.35rem);
    padding: 18px 30px;
    background: transparent;
    cursor: pointer;
    border-radius: 8px;
    transition: ease all 0.3s;
    border: 1px solid#2b4a88;
    color: #304c83;

    @media ${devices.laptopL} {
      padding: 22px 40px;
    }
  }

  :hover {
    background: #2b4a88;
    color: #fff !important;
  }
`;
