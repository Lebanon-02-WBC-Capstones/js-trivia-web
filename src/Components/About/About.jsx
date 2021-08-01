import React from "react";
import TeamGrid from "./TeamGrid";
import ContactUs from "./ContactUs";
import ThankYouModal from "../Modals/ThankYouModal";

function About() {
  return (
    <div>
      <TeamGrid />
      <ContactUs />
      <ThankYouModal />
    </div>
  );
}

export default About;
