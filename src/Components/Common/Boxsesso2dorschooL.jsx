import React from "react";
import "./Boxsesso2dorschooL.css";

const Boxsesso2dorschooL = ({
  className = "",
  bgColor = "#9880FF",
  imgSrc,
  title = "",
  description = "",
}) => {
  return (
    <div
      className={`sec2boxx ${className}`}
      style={{ background: bgColor }}
    >
      {imgSrc && <img src={imgSrc} alt="box" className="arrow-img" />}
      <h1 className="text01seco2">{title}</h1>
      <p className="text02seco2">{description}</p>
    </div>
  );
};

export default Boxsesso2dorschooL;