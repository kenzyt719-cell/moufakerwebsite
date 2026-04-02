import React from "react";
import "./Titleandsub.css";

const Titleandsub = ({ title, subtitle }) => {
  return (
    <>
    <div className="tittlesdiv">
 <h1 className="TitleONEIN">{title}</h1>
      <h2 className="TitleONEtwo">{subtitle}</h2>

    </div>
         </>
  );
};

export default Titleandsub;