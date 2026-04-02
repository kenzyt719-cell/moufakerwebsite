import React from "react";
import "./Boxsesso2dorschooL.css";
import bb01 from "../../Assets/bb01.png";

const Boxsesso2dorschooL = ({ className = "" }) => {
  return (
    <div className={`sec2boxx ${className}`}>
      <img src={bb01} alt="box" className="arrow-img" />

      <h1 className="text01seco2">
        Students underperform due to poor time management
      </h1>

      <p className="text02seco2">
        Many students struggle to balance multiple subjects, leading to inconsistent study habits and lower academic performance.
      </p>
    </div>
  );
};

export default Boxsesso2dorschooL;