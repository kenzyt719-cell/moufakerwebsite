import React from "react";
import "./Howitworks.css";
import bgImage from "../../Assets/howtostudypic.png";
import Howitworksdiv from "../Common/Howitworksdiv";
import Titleandsub from "../Common/Titleandsub";

const Howitworks = () => {
  return (
    <div>
         <Titleandsub
        title="How Moufakker Works"
        subtitle="Your journey to academic success in 6 simple steps"
      />

      <Howitworksdiv />
    </div>
  );
};

export default Howitworks;