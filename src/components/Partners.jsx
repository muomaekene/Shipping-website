import styled from "styled-components";

const Partners = () => {
  return (
    <Container>
      <img
        src="https://www.maersk.com/~/media_sc9/maersk/homepage/brands/maersk_line_limited_rgb_logo.svg"
        alt="partner-logo"
        width="200"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/9d/FedEx_Express.svg"
        alt="partner-logo"
        width="200"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/en/2/22/Hapag_lloyd_logo.svg"
        alt="partner-logo"
      />
      <img
        src="https://www.maersk.com/~/media_sc9/maersk/homepage/brands/apm-terminals_pos.svg"
        alt="partner-logo"
        width="200"
      />
      <img
        src="https://www.maersk.com/~/media_sc9/maersk/homepage/brands/svitzer.svg"
        alt="partner-logo"
        width="200"
      />
    </Container>
  );
};

export default Partners;

const Container = styled.div`
  display: flex;
  overflow-y: scroll;
  padding: 20px 20px 0 20px;
  margin: 30px 0;

  img {
    margin-right: 40px;
  }
`;
