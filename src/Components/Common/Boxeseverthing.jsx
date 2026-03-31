import React from "react";
import "./Boxeseverthing.css";
import arrow from "../../Assets/arrow.png";

const Boxeseverthing = ({ title, description, features }) => {
  return (
    <div className="boxeverything">

      <img src={arrow} alt="arrow" className="stylearrow" />

      <h1 className="h1boxtext">{title}</h1>

      <p className="h1boxtext02">{description}</p>

      {features.map((item, index) => (
        <div className="divdout" key={index}>
          <div className="dout"></div>
          <p className="textdout">{item}</p>
        </div>
      ))}

    </div>
  );
};

export default Boxeseverthing;