import React, { Component } from 'react';
import Nav from "../Components/Layout/Nav";
import Homesection from "../Components/Layout/Homesection";
import Dayinlife01 from "../Components/Layout/Dayinlife01";
import Everythingsection from "../Components/Layout/Everythingsection";
import ThreePillarSection from "../Components/Layout/ThreePillarSection";
import Fiftypercentoff from "../Components/Layout/Fiftypercentoff";
import Downloadapp from "../Components/Layout/Downloadapp";
import Journeyanimation  from "../Components/Layout/Journeyanimation";
import Howtostudy  from "../Components/Layout/Howtostudy";
import Transform  from "../Components/Layout/Transform";
import Heromain  from "../Components/Layout/Heromain";
import Sec02forschool from "../Components/Layout/Sec02forschool";

import Sec03provides from "../Components/Layout/Sec03provides";
import Sec04forschool from "../Components/Layout/Sec04forschool";
import Squares from "../Components/Layout/Squares";
import Howitworks from "../Components/Layout/Howitworks";

import FeaturesSection from "../Components/Layout/FeaturesSection";

import "./ForSchool.css";

const ForSchool = () => {
    return ( <>
    <div className='home'>
 <Nav />



<Homesection
  title="Upgrade Your School's 
Academic System."
  description="Moufakker combines structured study planning, performance tracking, student wellness support, and parent transparency into one unified platform."
  buttonText="Start Your Free Trial"
/>

<Sec02forschool />
<Sec03provides />
<Sec04forschool />
<Squares />
<FeaturesSection />
<Howitworks />


    </div>
     

    
    
    
    
    
    
    </> );
}
 
export default ForSchool;