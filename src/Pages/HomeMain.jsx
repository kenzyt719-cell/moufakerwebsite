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
import TabTab from "../Components/Layout/TabTab";
import Reviews from "../Components/Layout/Reviews";
import Pricing from "../Components/Layout/Pricing";
import Footer from "../Components/Layout/Footer";


import "./HomeMain.css";

const HomeMain = () => {
    return ( <>
    <div className='home'>
 <Nav />

<Homesection
  title="Your Journey to Success Starts Here"
  description="Imagine a world where studying isn't overwhelming. Where you have a personal companion that understands your struggles, celebrates your wins, and guides you every step of the way."
  buttonText="Start Your Free Trial"
/>


<Journeyanimation />
      <TabTab />
      <Reviews />
 <Fiftypercentoff />
      <Pricing />
 <Downloadapp />
 <Footer />





 {/* <Dayinlife01 />
 <Everythingsection />
 <ThreePillarSection />
 <Fiftypercentoff />
<Howtostudy />
<Transform /> */}
{/* <Heromain /> */}







    </div>
     

    
    
    
    
    
    
    </> );
}
 
export default HomeMain;