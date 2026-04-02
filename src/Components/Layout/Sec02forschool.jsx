import React from "react";
import "./Sec02forschool.css";
import Boxsesso2dorschooL from "../Common/Boxsesso2dorschooL";
import Titleandsub from "../Common/Titleandsub";

const Sec02forschool = () => {
  return (
    <div className="sec02-container">
      <Titleandsub
        title="The Real Challenges School Faces"
        subtitle="Modern schools struggle with operational inefficiencies that impact both student outcomes and administrative effectiveness."
      />

      <div className="divsec201">
        <Boxsesso2dorschooL className="from-left" />
        <Boxsesso2dorschooL className="from-right" />
        <Boxsesso2dorschooL className="from-top" />
        <Boxsesso2dorschooL className="from-bottom" />
        <Boxsesso2dorschooL className="from-left" />
        <Boxsesso2dorschooL className="from-right" />
      </div>
    </div>
  );
};

export default Sec02forschool;