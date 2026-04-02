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


import "./Home.css";

const Home = () => {
    return ( <>
    <div className='home'>
 <Nav />


 <Homesection />
 <Dayinlife01 />
 <Everythingsection />
 <ThreePillarSection />
 <Fiftypercentoff />
 <Downloadapp />
<Journeyanimation />
<Howtostudy />
<Transform />
{/* <Heromain /> */}



bgscreen01.png



    </div>
     

    
    
    
    
    
    
    </> );
}
 
export default Home;