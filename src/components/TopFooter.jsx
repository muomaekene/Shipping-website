import Logo from "../components/Logo";

import { Facebook, Instagram, Linkedin } from "lucide-react";
import { devices } from "../utils/breakpoints";

import styled from "styled-components";

const TopFooter = () => {
  return (
    <Container>
      <div className="left-side">
        <Logo />
        <Paragraph>
          EXPEDI simplifies how individuals and companies send and receive
          freight across the world.
        </Paragraph>

        <LocationGroup>
          <Header>Our Location</Header>
          <Paragraph>
            70 Washington Square South, New York, NY 10012, United States
          </Paragraph>
          <Paragraph>office@expedi.com</Paragraph>
          <Paragraph>(734) 621-9936</Paragraph>
          <div className="socials">
            <Instagram color="#a0a0a4" strokeWidth="1.5" />
            <Facebook color="#a0a0a4" strokeWidth="1.5" />
            <Linkedin color="#a0a0a4" strokeWidth="1.5" />
          </div>
        </LocationGroup>
      </div>

      <Grid>
        <div className="footer-menu">
          <Header>Services</Header>
          <ul>
            <li>
              <Link href="#">Air Freight</Link>
            </li>
            <li>
              <Link href="#">Ocean Freight</Link>
            </li>
            <li>
              <Link href="#">Railway Freight</Link>
            </li>
            <li>
              <Link href="#">Warehousing</Link>
            </li>
            <li>
              <Link href="#">Distribution</Link>
            </li>
            <li>
              <Link href="#">Value Added</Link>
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
              <Link href="#">Case Studies</Link>
            </li>
            <li>
              <Link href="#">Our Certificates</Link>
            </li>
            <li>
              <Link href="#">Our Partners</Link>
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
              <Link href="#">Price Table</Link>
            </li>
            <li>
              <Link href="#">Cost Calculator</Link>
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
  padding: 40px 20px;
  background: #0e0e0e;
  display: flex;
  flex-direction: column;

  @media ${devices.tablet} {
    flex-direction: row;
  }

  @media ${devices.laptop} {
    padding: 60px;
  }

  @media ${devices.laptopL} {
    padding: 80px;
  }

  .left-side {
    width: 100%;

    @media ${devices.tablet} {
      width: 40%;
      margin-right: 40px;
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
    margin-top: 20px;
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
  font-size: 20px;
  font-weight: 400;
  color: #fff;

  @media ${devices.laptop} {
    font-size: 22px;
  }

  @media ${devices.laptopL} {
    font-size: 24px;
  }
`;

const Paragraph = styled.p`
  font-size: 16px;
  color: #a0a0a4;
  margin-top: 10px;

  @media ${devices.laptop} {
    font-size: 18px;
  }

  @media ${devices.laptopL} {
    font-size: 20px;
  }
`;

const Link = styled.a`
  font-size: 16px;
  color: #a0a0a4;
  margin-top: 10px;
  text-decoration: none;

  @media ${devices.laptop} {
    font-size: 18px;
  }

  @media ${devices.laptopL} {
    font-size: 20px;
  }
`;

const LocationGroup = styled.div`
  margin-top: 30px;
`;

const Grid = styled.div`
  display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-top: 30px;

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
