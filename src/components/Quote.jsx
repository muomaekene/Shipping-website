import Section from "./Section";
import Feature from "./Feature";

import calculatorCaute from "../images/calculator-cuate.png";

const Quote = () => {
  return (
    <Section backgroundColor="#0e0e0e">
      <Feature
        title="Get An Instant Quote"
        content="You shouldn't break the bank to move freight across the country. Use our simple quote estimator to find out how much it'd cost you to ship with us"
        buttonName="Calculate Price"
        imgSrc={calculatorCaute}
        imgAlt="Illustration of guy holding a calculator"
      />
    </Section>
  );
};

export default Quote;
