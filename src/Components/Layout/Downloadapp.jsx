import React from "react";
import "./Downloadapp.css";
import phoneImg from "../../Assets/downloadmobapp.png";


const Downloadapp = () => {
  return (
    <section className="download-app">
      <div className="download-container">
        
        <div className="download-text">
          <h1>
            Download The <br /> App Now
          </h1>
          <p>
            Join 50,000+ students already studying smarter with us
          </p>
          <button className="download-btn">Download Now</button>
        </div>

        <div className="download-image">
          <img src={phoneImg} alt="app preview" />
        </div>

      </div>
    </section>
  );
};

export default Downloadapp;