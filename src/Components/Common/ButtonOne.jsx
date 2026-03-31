import React from "react";
import "./ButtonOne.css";

const ButtonOne = ({ text, onClick }) => {
  return (
    <button className="btn-one" onClick={onClick}>
      {text}
    </button>
  );
};

export default ButtonOne;