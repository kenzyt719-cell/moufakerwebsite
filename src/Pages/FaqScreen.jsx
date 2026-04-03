import React from "react";
import "./FaqScreen.css";
import Homesection from "../Components/Layout/Homesection";
import Faqsec  from "../Components/Layout/Faqsec";
import TabTab   from "../Components/Layout/TabTab";

const FaqScreen = () => {
  return (
    <>
      <Homesection
        title="Got Questions?"
        description="Moufakker combines structured study planning, performance tracking, student wellness support, and parent transparency into one unified platform."
        buttonText="Start Your Free Trial"
      />
      <Faqsec />
      <TabTab />
    </>
  );
};

export default FaqScreen;