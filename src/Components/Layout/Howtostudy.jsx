import React from "react";
import "./Howtostudy.css";
import bgImage from "../../Assets/howtostudypic.png";

const Howtostudy = () => {
  return (
    <div
      className="howtostudydiv"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="overlay">
        <h1>How to Study</h1>
        <h2>The Right Way</h2>
      </div>
    </div>
  );
};

export default Howtostudy;