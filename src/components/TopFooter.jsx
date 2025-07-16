import Logo from "../components/Logo";

import { Facebook, Instagram, Linkedin } from "lucide-react";
import { devices } from "../utils/breakpoints";

import styled from "styled-components";

const TopFooter = () => {
  return (
    <Container>
      <div className="footer-info">
        <Logo />
        <Paragraph>
          EXPEDIT simplifies how individuals and companies send and receive
          freight across the United States
        </Paragraph>

        <LocationGroup>
          <Header>Our Location</Header>
          <Paragraph>
            70 Washington Square South, New York, NY 10012, United States
          </Paragraph>
          <Paragraph>office@expedit.com</Paragraph>
          <Paragraph>(734) 621-9936</Paragraph>
          <div className="socials">
            <Instagram color="#d1cfcf" strokeWidth="1.2" />
            <Facebook color="#d1cfcf" strokeWidth="1.2" />
            <Linkedin color="#d1cfcf" strokeWidth="1.2" />
          </div>
        </LocationGroup>
      </div>

      <Grid>
        <div className="footer-menu">
          <Header>Services</Header>
          <ul>
            <li>
              <Link href="#">Road Freight</Link>
            </li>
            <li>
              <Link href="#">Air Freight</Link>
            </li>
            <li>
              <Link href="#">Ocean Freight</Link>
            </li>
            <li>
              <Link href="#">Distribution</Link>
            </li>
            <li>
              <Link href="#">Warehousing</Link>
            </li>
            <li>
              <Link href="#">Fleet Mgmt</Link>
            </li>
          </ul>
        </div>
        <div className="footer-menu">
          <Header>Company</Header>
          <ul>
            <li>
              <Link href="#">Mission</Link>
            </li>
            <li>
              <Link href="#">Why Choose Us</Link>
            </li>

            <li>
              <Link href="#">Our Certificates</Link>
            </li>
            <li>
              <Link href="#">Our Partners</Link>
            </li>
            <li>
              <Link href="#">Work With Us</Link>
            </li>
            <li>
              <Link href="#">Contact us</Link>
            </li>
          </ul>
        </div>
        <div className="footer-menu">
          <Header>Industries</Header>
          <ul>
            <li>
              <Link href="#">Global Coverage</Link>
            </li>
            <li>
              <Link href="#">Distribution</Link>
            </li>
            <li>
              <Link href="#">Accounting Tools</Link>
            </li>
            <li>
              <Link href="#">Freight Recovery</Link>
            </li>
            <li>
              <Link href="#">Supply Chain</Link>
            </li>
            <li>
              <Link href="#">Warehousing</Link>
            </li>
          </ul>
        </div>
        <div className="footer-menu">
          <Header>Useful Links</Header>
          <ul>
            <li>
              <Link href="#">Careers</Link>
            </li>
            <li>
              <Link href="#">Services</Link>
            </li>
            <li>
              <Link href="#">Get Quote</Link>
            </li>
            <li>
              <Link href="#">Tracking</Link>
            </li>
            <li>
              <Link href="#">Location</Link>
            </li>
            <li>
              <Link href="#">FAQ</Link>
            </li>
          </ul>
        </div>
      </Grid>
    </Container>
  );
};

export default TopFooter;

const Container = styled.section`
  padding: 40px 16px;
  background: #0e0e0e;
  display: flex;
  flex-direction: column;

  @media ${devices.tablet} {
    flex-direction: row;
  }

  @media ${devices.laptop} {
    padding: 40px 24px;
  }

  .footer-info {
    width: 100%;
    margin-bottom: 30px;

    @media ${devices.tablet} {
      width: 40%;
      margin-right: 50px;
    }

    @media ${devices.laptop} {
      width: 35%;
    }

    @media ${devices.laptopL} {
      width: 30%;
      margin-right: 60px;
    }
  }

  .socials {
    margin-top: 30px;
    width: 100px;
    display: flex;
    justify-content: space-between;
  }

  ul {
    list-style-type: none;
    li {
      padding: 10px 0;
    }
  }
`;

const Header = styled.h4`
  font-size: 18px;
  color: #fff;

  @media ${devices.laptop} {
    font-size: 20px;
  }

  @media ${devices.laptopL} {
    font-size: 22px;
  }
`;

const Paragraph = styled.p`
  font-size: 18px;
  color: #d1cfcf;
  margin-top: 10px;
`;

const Link = styled.a`
  font-size: 18px;
  color: #d1cfcf;
  margin-top: 10px;
  text-decoration: none;
`;

const LocationGroup = styled.div`
  margin-top: 30px;
`;

const Grid = styled.div`
  display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  gap: 40px;

  @media ${devices.tablet} {
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    margin-top: 0;
  }

  @media ${devices.laptop} {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media ${devices.laptopL} {
    gap: 70px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
