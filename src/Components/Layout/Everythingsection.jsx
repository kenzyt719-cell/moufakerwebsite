import React from "react";
import "./Everythingsection.css";
import Boxeseverthing from "../Common/Boxeseverthing";
import bg from "../../Assets/bgscreens.png";

const Everythingsection = () => {
  return (
   <>
    <div className="divone">
        <h1 className="h1dayinlife">Everything You Need</h1>

<div className="styleboxesthree">
<Boxeseverthing
        title="Instant Homework Help"
        description="Follow up all the homeworks and all the school activites"
        features={[
          "Multiple learning styles",
          "Step-by-step explanations",
          "Unlimited questions"
        ]}
      />
<Boxeseverthing
        title="Instant Homework Help"
        description="Follow up all the homeworks and all the school activites"
        features={[
          "Multiple learning styles",
          "Step-by-step explanations",
          "Unlimited questions"
        ]}
      />
      <Boxeseverthing
        title="Instant Homework Help"
        description="Follow up all the homeworks and all the school activites"
        features={[
          "Multiple learning styles",
          "Step-by-step explanations",
          "Unlimited questions"
        ]}
      />
</div>


   </div>


   </>
  );
};

export default Everythingsection;