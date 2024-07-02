import Section from "./Section";
import Feature from "./Feature";

import { ArrowRightIcon } from "lucide-react";
import trackingIllustrator from "./../images/tracking.png";

const Track = () => {
  return (
    <Section backgroundColor="#0e0e0e">
      <Feature
        title="Track Your Shipment"
        content="If you have recently shipped a package with us, enter your tracking
          code below to check shipping status"
        buttonName="Track Now"
        icon={<ArrowRightIcon size="20" strokeWidth="1.5" />}
        imgSrc={trackingIllustrator}
        imgAlt="Illustration of guy operating a gps device"
      />
    </Section>
  );
};

export default Track;
