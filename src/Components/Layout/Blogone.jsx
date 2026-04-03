import React from "react";
import "./Blogone.css";
import img1 from "../../Assets/photoblog.png";

const Blogone = () => {
  return (
    <div className="blog-card">
      <img src={img1} alt="" className="blog-img" />

      <div className="blog-body">
        <p className="blog-tag">Study Tips</p>

        <h2 className="blog-title">
          The Importance of Personalized Study Plans
        </h2>

        <p className="blog-desc">
          Proven strategies to excel in your Thanaweya Amma exams
        </p>

        <div className="blog-footer">
          <span>Feb 18, 2026</span>
          <span>→</span>
        </div>
      </div>
    </div>
  );
};

export default Blogone;