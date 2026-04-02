import React, { useState } from "react";
import "./FeaturesSection.css";
import icon from "../../Assets/bb01.png";

const FeaturesSection = () => {
  const [active, setActive] = useState(false);

  const features = [
    "Clear student workload visibility",
    "Clear student workload visibility",
    "Clear student workload visibility",
    "Reduced manual tracking",
    "Exportable academic reports",
  ];

  return (
    <div
      className={`features-section ${active ? "active" : ""}`}
      onMouseEnter={() => setActive(true)}
    >
      
      {/* LEFT */}
      <div className="features-left">
        {features.map((text, i) => (
          <div className="feature-card" key={i}>
            <img src={icon} alt="icon" />
            <p>{text}</p>
          </div>
        ))}
      </div>

      {/* RIGHT */}
      <div className="dashboard">
        <h3>Teacher Dashboard</h3>

        <div className="card">
          <p>Class Performance</p>
          <div className="progress-bar">
            <div className="progress"></div>
          </div>
        </div>

        <div className="card">
          <p>Upcoming Tasks</p>
          <ul>
            <li>✔ Grade Math Quiz</li>
            <li>✔ Update Study Plans</li>
            <li>✔ Parent Meeting</li>
          </ul>
        </div>

        <div className="card">
          <p>Time Saved This Week</p>
          <h2>12.5 hrs</h2>
        </div>
      </div>

    </div>
  );
};

export default FeaturesSection;