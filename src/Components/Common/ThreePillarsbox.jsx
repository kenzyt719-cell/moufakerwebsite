import React from "react";
import "./ThreePillarsbox.css";
import ButtonOne from "../Common/ButtonOne";

const  ThreePillarsbox = () => {
  return (
   <>
    <div className="pillardivmain">
        <div>
            <h1 className="text1three">School Integration</h1>
            <p className="text2three">Seamless bridge between students, parents, and <br /> schools. Real-time updates, attendance tracking, and <br /> comprehensive analytics.</p>
                 <ButtonOne text="Start Now" />

        </div>
        <div className="boxesthreee">
            <div className="boxpillarin">
          <div className="dout"></div>
          <h1 className="textsxhool">School Portal</h1>


            </div>
              <div className="boxpillarin">
          <div className="dout"></div>
          <h1 className="textsxhool">School Portal</h1>


            </div>
              <div className="boxpillarin">
          <div className="dout"></div>
          <h1 className="textsxhool">School Portal</h1>


            </div>
              <div className="boxpillarin">
          <div className="dout"></div>
          <h1 className="textsxhool">School Portal</h1>


            </div>
        </div>

    </div>

   </>
  );
};

export default ThreePillarsbox;