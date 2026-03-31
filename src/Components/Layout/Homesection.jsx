import React from "react";
import "./Homesection.css";
import ButtonOne from "../Common/ButtonOne";
import bg from "../../Assets/bgscreens.png";

const Homesection = () => {
  return (
    <div
      className="home-section"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="overlay"></div>

      <div className="home-content">
        <h1>
          Your Journey to Success <br /> Starts Here
        </h1>

        <p>
          Imagine a world where studying isn't overwhelming. Where you have a personal companion 
          that understands your struggles, celebrates your wins, and guides you every step of the way.
        </p>

        <ButtonOne text="Start Your Free Trial" />
      </div>
    </div>
  );
};

export default Homesection;