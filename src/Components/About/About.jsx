import React from "react";
import WhoAreWe from "./WhoAreWe";
import TeamGrid from "./TeamGrid";
import ContactUs from "./ContactUs";
import ThankYouModal from "../Modals/ThankYouModal";

function About() {
  return (
    <div>
      <WhoAreWe />
      <TeamGrid />
      <ContactUs />
      <ThankYouModal />
    </div>
  );
}

export default About;
