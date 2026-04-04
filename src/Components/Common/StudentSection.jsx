import React from "react";
import "./StudentSection.css";

const StudentSection = () => {
  return (
    <div className="student-section">
      <div className="card">
        <div className="header">
          <div className="icon">🎓</div>
          <div>
            <h2>For Students</h2>
            <p>Personalized AI-powered learning experiences</p>
          </div>
        </div>

        <div className="features">
          <div className="feature">• AI Study Assistant</div>
          <div className="feature">• Interactive Lessons</div>
          <div className="feature">• Progress Tracking</div>
          <div className="feature">• Gamified Learning</div>
        </div>

        <div className="button-container">
          <button className="start-btn">Start Now</button>
        </div>
      </div>
    </div>
  );
};

export default StudentSection;