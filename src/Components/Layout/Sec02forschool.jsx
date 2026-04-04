import React from "react";
import "./Sec02forschool.css";
import Boxsesso2dorschooL from "../Common/Boxsesso2dorschooL";
import Titleandsub from "../Common/Titleandsub";
import bb01 from "../../Assets/bb01.png";
import bb02 from "../../Assets/bb01.png";
import bb03 from "../../Assets/bb01.png";
import bb04 from "../../Assets/bb01.png";

const Sec02forschool = () => {
  return (
    <div className="sec02-container">
      <Titleandsub
        title="The Real Challenges School Faces"
        subtitle="Modern schools struggle with operational inefficiencies that impact both student outcomes and administrative effectiveness."
      />

      <div className="divsec201 hover-trigger">
        <Boxsesso2dorschooL
          className="from-left"
          bgColor="#9880FF"
          imgSrc={bb01}
          title="Students underperform due to poor time management"
          description="Many students struggle to balance multiple subjects, leading to inconsistent study habits and lower academic performance."
        />
        <Boxsesso2dorschooL
          className="from-right"
             bgColor="#9880FF"
          imgSrc={bb02}
          title="Teachers overwhelmed with admin tasks"
          description="Excessive paperwork and scheduling burdens reduce time for instruction and student engagement."
        />
        <Boxsesso2dorschooL
          className="from-top"
        bgColor="#9880FF"
          imgSrc={bb03}
          title="Lack of personalized learning"
          description="Students often don’t receive tailored instruction to match their unique learning styles and needs."
        />
        <Boxsesso2dorschooL
          className="from-bottom"
     bgColor="#9880FF"
          imgSrc={bb04}
          title="Communication gaps with parents"
          description="Inefficient communication channels make it difficult for schools to keep families informed and engaged."
        />
        <Boxsesso2dorschooL
          className="from-left"
           bgColor="#9880FF"
          imgSrc={bb01}
          title="Limited resource access"
          description="Schools often lack access to modern educational tools and technologies that enhance learning."
        />
        <Boxsesso2dorschooL
          className="from-right"
      bgColor="#9880FF"
          imgSrc={bb02}
          title="High student-to-teacher ratios"
          description="Large class sizes make it challenging for teachers to provide individual attention."
        />
      </div>
    </div>
  );
};

export default Sec02forschool;