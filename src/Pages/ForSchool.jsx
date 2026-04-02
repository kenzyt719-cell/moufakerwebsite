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

import FeaturesSection from "../Components/Layout/FeaturesSection";

import "./ForSchool.css";

const ForSchool = () => {
    return ( <>
    <div className='home'>
 <Nav />



<Homesection
  title="Your Journey to Success Starts Here"
  description="Imagine a world where studying isn't overwhelming. Where you have a personal companion that understands your struggles, celebrates your wins, and guides you every step of the way."
  buttonText="Start Your Free Trial"
/>

<Sec02forschool />
<Sec03provides />
<Sec04forschool />
<Squares />
<FeaturesSection />


    </div>
     

    
    
    
    
    
    
    </> );
}
 
export default ForSchool;