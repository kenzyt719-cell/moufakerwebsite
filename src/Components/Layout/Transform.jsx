import React from "react";
import "./Transform.css";
import boyImg from "../../Assets/boytransform.png";

const Transform = () => {
  return (
    <div className="divtransform">
      <div className="transform-content">
        <h1>Ready to Transform Your Learning?</h1>
        <p>Join 50,000+ students already studying smarter with us</p>

        <div className="buttons">
          <button className="btn primary">Start Now</button>
          <button className="btn secondary">View pricing</button>
          
        </div>
      </div>

      <img src={boyImg} alt="student" className="boy-img" />
    </div>
  );
};

export default Transform;