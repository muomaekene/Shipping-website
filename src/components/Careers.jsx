import SectionTitle from "../components/SectionTitle";
import deliveryPeople from "../images/delivery-people.jpg";
import manWriting from "../images/man-writing.jpg";
import manInStore from "../images/man-in-store.jpg";

import styled from "styled-components";
import GroupTitle from "./GroupTitle";
import GroupContent from "./GroupContent";
import GroupButton from "./GroupButton";

const Careers = () => {
  return (
    <Container>
      <SectionTitle title="Become Part of Our Team" />
      <div className="image-group">
        <img
          src={deliveryPeople}
          alt="delivering items"
          className="job-image"
        />
        <img src={manWriting} alt="delivering items" className="job-image" />
        <img src={manInStore} alt="delivering items" className="job-image" />
      </div>
      <GroupTitle title="Interested in Making an Impact in a Fast Developing and Connected World? " />
      <GroupContent content="Meet our people, see where we work and join a diverse, dynamic and growing organization that continually invests in advancing your skills and professional opportunites while contributing something meaniful to the modern world." />
      <GroupButton name="Find Opportunities" />
    </Container>
  );
};

export default Careers;

const Container = styled.section`
  padding: 20px;

  .job-image {
    margin-top: 15px;
    width: 100%;
    height: auto;
  }

  .image-group {
    margin-bottom: 15px;
    margin-top: 30px;
  }
`;
