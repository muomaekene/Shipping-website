import SectionTitle from "./SectionTitle";
import menInWharehouse from "../images/men-in-wharehouse.jpg";

import GroupTitle from "../components/GroupTitle";
import GroupContent from "../components/GroupContent";
import GroupButton from "../components/GroupButton";

import styled from "styled-components";

const About = () => {
  return (
    <Container>
      <SectionTitle title="Who Are We?" />
      <img
        src={menInWharehouse}
        alt="Men standing in wharehouse"
        className="image"
      />
      <GroupTitle title="We Are Global Leaders in the Business of Logistics and Shipping" />
      <GroupContent content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos dolorem, quo libero sequi cupiditate magnam, eum placeat ab explicabo dolorum molestiae dolor totam ex laboriosam quam inventore quisquam esse fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis fugiat, illo fugit quisquam sapiente voluptates nemo. Hic tenetur veniam beatae cupiditate temporibus sed, maxime corporis aliquam officia ex, deleniti est!" />
      <GroupButton name="Learn More" />
    </Container>
  );
};

export default About;

const Container = styled.section`
  padding: 20px;

  .image {
    width: 100%;
    height: auto;
    margin: 30px 0;
  }
`;
