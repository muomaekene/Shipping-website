import Section from "./Section";
import Feature from "./Feature";

import calculatorCaute from "../images/calculator-cuate.png";
import { ArrowRightIcon } from "lucide-react";

const Quote = () => {
  return (
    <Section hex="#0e0e0e">
      <Feature
        title="Get An Instant Quote"
        content="You shouldn't break the bank to move freight across the country. Use our simple quote estimator to find out how much it'd cost you to ship with us"
        buttonName="Calculate Price"
        icon={<ArrowRightIcon size="20" strokeWidth="1.5" />}
        imgSrc={calculatorCaute}
        imgAlt="Illustration of guy holding a calculator"
        url="/get-quote"
      />
    </Section>
  );
};

export default Quote;
