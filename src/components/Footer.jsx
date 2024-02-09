import styled from "styled-components";
import Logo from "../components/Logo";
import GroupTitle from "./GroupTitle";
import GroupContent from "./GroupContent";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <Container>
      <Logo />
      <div className="item-group">
        <GroupTitle title="Our Location" />
        <GroupContent content="3895 Harrison Street, San Francisco, CA 94103" />
      </div>
      <div className="item-group">
        <GroupTitle title="Connect With Us" />
        <div className="socials">
          <Instagram size={20} strokeWidth={1} />
          <Facebook size={20} strokeWidth={1} />
          <Linkedin size={20} strokeWidth={1} />
        </div>
      </div>
      <ul className="more-links">
        <li>
          <a href="#">Terms of use</a>
        </li>
        <li>
          <a href="#">Privacy notice</a>
        </li>
        <li>
          <a href="#">Cookie policy</a>
        </li>
      </ul>

      <div className="copyright">Copyright &copy; 2024 Shippn Co.</div>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  padding: 20px;

  .item-group {
    margin-top: 30px;
  }

  .socials {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    width: 30%;
  }

  .more-links {
    list-style-type: none;
    margin-top: 30px;
    font-size: 12px;
    font-weight: 300;
    text-transform: uppercase;

    li {
      margin-bottom: 10px;
      a {
        color: #888888;
      }
    }
  }

  .copyright {
    width: 100%;
    margin-top: 10px;
    padding: 15px;
    font-size: 14px;
    font-weight: 300;
    display: flex;
    justify-content: center;
  }
`;
