import Logo from "../components/Logo";

import Section from "./Section";
import GroupTitle from "./ArticleTitle";
import GroupContent from "./ArticleContent";

import { Facebook, Instagram, Linkedin } from "lucide-react";

import styled from "styled-components";

const TopFooter = () => {
  return (
    <Section backgroundColor="#addae6">
      <Logo />
      <ItemGroup>
        <GroupTitle title="Our Location" />
        <GroupContent content="3895 Harrison Street, San Francisco, CA 94103" />
      </ItemGroup>
      <ItemGroup>
        <GroupTitle title="Connect With Us" />
        <Socials>
          <Instagram size={20} strokeWidth={1} />
          <Facebook size={20} strokeWidth={1} />
          <Linkedin size={20} strokeWidth={1} />
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
    </Section>
  );
};

export default TopFooter;

const ItemGroup = styled.div`
  margin-top: 30px;
`;

const Socials = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  width: 30%;
`;

const MoreLinks = styled.ul`
  list-style-type: none;
  margin-top: 30px;
  font-size: 12px;
  font-weight: 300;
  text-transform: uppercase;
`;

const ListItem = styled.li`
  margin-top: 10px;
`;
const Link = styled.a`
  color: #6a6a6a;
`;
