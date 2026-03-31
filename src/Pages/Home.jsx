import React, { Component } from 'react';
import Nav from "../Components/Layout/Nav";
import Homesection from "../Components/Layout/Homesection";
import Dayinlife01 from "../Components/Layout/Dayinlife01";
import Everythingsection from "../Components/Layout/Everythingsection";
import ThreePillarSection from "../Components/Layout/ThreePillarSection";


import "./Home.css";

const Home = () => {
    return ( <>
    <div className='home'>
 <Nav />


 <Homesection />
 <Dayinlife01 />
 <Everythingsection />
 <ThreePillarSection />







    </div>
     

    
    
    
    
    
    
    </> );
}
 
export default Home;