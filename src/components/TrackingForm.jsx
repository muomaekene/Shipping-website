import { ArrowRightIcon } from "lucide-react";
import { devices } from "../utils/breakpoints";

import styled from "styled-components";

const TrackingForm = () => {
  return (
    <Container>
      <input type="text" placeholder="Enter your tracking code" />
      <button>
        Track <ArrowRightIcon strokeWidth="1.2" size="18" />
      </button>
    </Container>
  );
};

export default TrackingForm;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media ${devices.laptop} {
    flex-direction: row;
    align-items: center;
  }

  input {
    width: 100%;
    height: 70px;
    padding-left: 15px;
    font-size: 16px;
    outline: none;
    border-radius: 4px;
    margin-right: 10px;
    margin-bottom: 10px;

    @media ${devices.laptop} {
      width: 60%;
      margin-bottom: 0;
      font-size: 17px;
    }

    @media ${devices.laptopL} {
      height: 80px;
      font-size: 18px;
      padding-left: 20px;
    }
  }

  button {
    width: 100%;
    height: 70px;
    font-size: 16px;
    cursor: pointer;
    background: #4a4aed;
    border-radius: 4px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;

    @media ${devices.laptop} {
      width: 40%;
      font-size: 17px;
    }

    @media ${devices.laptopL} {
      height: 80px;
      font-size: 18px;
    }

    &:hover {
      background: #3636b5;
      border: 1px solid transparent !important;
      color: #fff !important;
    }
  }
`;
