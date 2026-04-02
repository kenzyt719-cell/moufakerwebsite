import React from "react";
import "./Homesection.css";
import ButtonOne from "../Common/ButtonOne";
import bg from "../../Assets/bgscreens.png"; // الخلفية ثابتة

const Homesection = ({ title, description, buttonText }) => {
  return (
    <div
      className="home-section"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="overlay"></div>

      <div className="home-content">
        <h1>{title}</h1>
        <p>{description}</p>
        <ButtonOne text={buttonText} />
      </div>
    </div>
  );
};

export default Homesection;