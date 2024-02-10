import SectionTitle from "./SectionTitle";
import ArticleTitle from "./ArticleTitle";
import ArticleContent from "./ArticleContent";
import Button from "./Button";

import deliveryPeople from "../images/delivery-people.jpg";
import manWriting from "../images/man-writing.jpg";
import manInStore from "../images/man-in-store.jpg";

import Section from "./Section";
import SectionImage from "./SectionImage";

const Careers = () => {
  return (
    <Section idValue="careers">
      <SectionTitle title="Become Part of Our Team" />
      <SectionImage imgSrc={deliveryPeople} imgAlt="delivering items" />
      <SectionImage imgSrc={manWriting} imgAlt="man writing" />
      <SectionImage imgSrc={manInStore} imgAlt="man inspecting store" />
      <ArticleTitle title="Interested in Making an Impact in a Fast Developing and Connected World? " />
      <ArticleContent content="Meet our people, see where we work and join a diverse, dynamic and growing organization that continually invests in advancing your skills and professional opportunites while contributing something meaniful to the modern world." />
      <Button name="Find Opportunities" />
    </Section>
  );
};

export default Careers;
