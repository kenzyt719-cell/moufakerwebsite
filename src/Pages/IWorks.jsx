import React from "react";
import "./IWorks.css";
import Nav from "../Components/Layout/Nav";
import Pricing from "../Components/Layout/Pricing";
import Homesection from "../Components/Layout/Homesection";

import  Howitworks from "../Components/Layout/Howitworks";

import icon from "../../src/Assets/bb01.png";
import Titleandsub from "../Components/Common/Titleandsub";
import Footer from "../Components/Layout/Footer";
import Fiftypercentoff from "../Components/Layout/Fiftypercentoff";

const IWorks = () => {
  return (
    <>


 <Nav />

<Homesection
  title="Upgrade Your School's 
Academic System."
  description="Moufakker combines structured study planning, performance tracking, student wellness support, and parent transparency into one unified platform."
  buttonText="Start Your Free Trial"
/>
<Howitworks />
       <Footer />

    </>
  );
};

export default IWorks;