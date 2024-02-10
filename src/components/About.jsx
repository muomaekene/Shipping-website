import menInWharehouse from "../images/men-in-wharehouse.jpg";

import Section from "./Section";
import SectionImage from "./SectionImage";
import SectionTitle from "./SectionTitle";
import ArticleTitle from "./ArticleTitle";
import ArticleContent from "./ArticleContent";
import GroupButton from "./Button";

const About = () => {
  return (
    <Section>
      <SectionTitle title="Who Are We?" />
      <SectionImage
        imgSrc={menInWharehouse}
        imgAlt="Men standing in wharehouse"
      />
      <ArticleTitle title="We Are Global Leaders in the Business of Logistics and Shipping" />
      <ArticleContent content="Shippn Co is an international forwarder specialized in managing your shipments from one destination to another. We design and implement industry-leading solutions together with our worldwide network of partners." />
      <ArticleContent content="With over 100+ dedicated employees, working around the globe, we deliver operational excellence to provide viable solutions to the most challenging supply chain questions. Therefore, most of our clients see us as one of the best logistics companies in the United States." />
      <ArticleContent content="Our focus on providing excellence and value to our customers is made possible by our team of experts who bring passion to their work. We are totally committed to meeting and exceeding our customers' expectations." />
      <GroupButton name="Learn More" />
    </Section>
  );
};

export default About;
