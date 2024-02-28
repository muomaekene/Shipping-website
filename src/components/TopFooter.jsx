import Logo from "../components/Logo";

import ArticleTitle from "./ArticleTitle";

import { Facebook, Instagram, Linkedin } from "lucide-react";
import { devices } from "../utils/breakpoints";

import styled from "styled-components";

const TopFooter = () => {
  return (
    <Container>
      <Logo />
      <Paragraph>
        EXPEDY simplifies how individuals and companies send and receive freight
        from all over the world.
      </Paragraph>

      <ItemGroup>
        <ArticleTitle title="Our Location" />
        <Paragraph>3895 Harrison Street, San Francisco, CA 94103</Paragraph>
      </ItemGroup>
      <ItemGroup>
        <ArticleTitle title="Get the Latest from Us" />
        <Socials>
          <Instagram color="#dee2e6" size={22} strokeWidth={1} />
          <Facebook color="#dee2e6" size={22} strokeWidth={1} />
          <Linkedin color="#dee2e6" size={22} strokeWidth={1} />
        </Socials>
      </ItemGroup>
      <MoreLinks>
        <ListItem>
          <Link href="#">Terms of use</Link>
        </ListItem>
        <ListItem>
          <Link href="#">Privacy notice</Link>
        </ListItem>
        <ListItem>
          <Link href="#">Cookie Policy</Link>
        </ListItem>
      </MoreLinks>
    </Container>
  );
};

export default TopFooter;

const Container = styled.section`
  background: #090976;
  padding: 40px 20px;
`;

const ItemGroup = styled.div`
  margin-top: 30px;
`;

const Socials = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  width: 30%;

  @media ${devices.tablet} {
    width: 20%;
  }

  @media ${devices.laptop} {
    width: 15%;
  }
`;

const MoreLinks = styled.ul`
  list-style-type: none;
  margin-top: 30px;
  font-size: 14px;
  font-weight: 400;
  text-transform: uppercase;

  @media ${devices.tablet} {
    font-size: 16px;
  }
`;

const ListItem = styled.li`
  margin-top: 10px;
`;

const Link = styled.a`
  color: #afb1b4;
`;

const Paragraph = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #ced4da;
  margin-top: 10px;

  @media ${devices.tablet} {
    font-size: 18px;
  }
`;
