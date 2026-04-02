import React from "react";
import "./Squares.css";
import icon from "../../Assets/squareicon.png";

const Squares = () => {
  return (
    <>
      <div className="divsquares">
        <div className="squareminidiv">
          <img className="iconsq" src={icon} alt="icon" />
          <h1 className="h1square">+23%</h1>
          <h1 className="h2square">Academic Growth</h1>
        </div>

             <div className="squareminidiv">
          <img className="iconsq" src={icon} alt="icon" />
          <h1 className="h1square">+23%</h1>
          <h1 className="h2square">Academic Growth</h1>
        </div>

             <div className="squareminidiv">
          <img className="iconsq" src={icon} alt="icon" />
          <h1 className="h1square">+23%</h1>
          <h1 className="h2square">Academic Growth</h1>
        </div>

             <div className="squareminidiv">
          <img className="iconsq" src={icon} alt="icon" />
          <h1 className="h1square">+23%</h1>
          <h1 className="h2square">Academic Growth</h1>
        </div>
      </div>
    </>
  );
};

export default Squares;