import React, { useState } from "react";
import "./Journeyanimation.css";

const steps = [
  {
    title: "Create Your Account",
    desc: "Register your details and select your grade level",
  },
  {
    title: "Level Assessment",
    desc: "Smart test to identify strengths and weaknesses",
  },
  {
    title: "Personalized Plan",
    desc: "Get an educational path designed specifically for you",
  },
  {
    title: "Start Learning",
    desc: "Interact with lessons and interactive tests",
  },
];

const Journeyanimation = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleEnter = () => {
    steps.forEach((_, i) => {
      setTimeout(() => {
        setActiveIndex(i);
      }, i * 300); // delay between each box
    });
  };

  return (
    <div className="timeline" onMouseEnter={handleEnter}>
      <div className="timeline-line"></div>

      {steps.map((step, index) => (
        <div
          key={index}
          className={`timeline-item 
          ${index % 2 === 0 ? "left" : "right"} 
          ${activeIndex >= index ? "show" : ""}`}
        >
          <div className="timeline-content">
            <span className="step">Step {index + 1}</span>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
            <div className="progress-line"></div>
          </div>

          <div className="circle">{index + 1}</div>
        </div>
      ))}
    </div>
  );
};

export default Journeyanimation;