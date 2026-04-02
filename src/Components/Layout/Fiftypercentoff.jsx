import React from "react";
import "./Fiftypercentoff.css";

import bg from "../../Assets/bgfiftyoff.png";
import girl from "../../Assets/girl.png";
import ButtonOne from "../Common/ButtonOne";

const Fiftypercentoff = () => {
  return (
    <div className="fifty-wrapper">
      <div
        className="fifty-container"
        style={{ backgroundImage: `url(${bg})` }}
      >
        {/* LEFT CONTENT */}
        <div className="fifty-content">
          <h1 className="fifty-title">
            50% OFF for a <br /> Limited Time!
          </h1>

          <p className="fifty-desc">
            Help students study smarter, stay organized,
            and achieve better results.
          </p>

          {/* BUTTON */}
          <div className="fifty-btn">
            <ButtonOne
              text="Get Started"
              onClick={() => console.log("Clicked")}
            />
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="fifty-image">
          <img src={girl} alt="student" />
        </div>
      </div>
    </div>
  );
};

export default Fiftypercentoff;