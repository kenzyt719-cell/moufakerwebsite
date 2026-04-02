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

{/* <Heromain /> */}






    </div>
     

    
    
    
    
    
    
    </> );
}
 
export default ForSchool;