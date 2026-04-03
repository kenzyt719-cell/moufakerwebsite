import React from "react";
import "./Pricesscreen.css";
import Nav from "../Components/Layout/Nav";
import Pricing from "../Components/Layout/Pricing";
 
import icon from "../../src/Assets/bb01.png";
import Titleandsub from "../Components/Common/Titleandsub";
import Footer from "../Components/Layout/Footer";
import Fiftypercentoff from "../Components/Layout/Fiftypercentoff";

const Pricesscreen = () => {
  return (
    <>
        <div className='contacthoem'>

 <Nav />
      <Pricing />
 <Fiftypercentoff />

       <Footer />
</div>
    </>
  );
};

export default Pricesscreen;