import React, { useState } from "react";
import "./Reviews.css";

const reviewsData = [
  {
    text: "As a mother, I'm reassured that my daughter is using a safe and truly educational platform. The detailed reports help me track her progress continuously.",
    name: "Sarah Ahmed",
    role: "Parent",
  },
  {
    text: "This platform helped me improve my grades a lot. The lessons are simple and clear.",
    name: "Omar Khaled",
    role: "Student",
  },
  {
    text: "We use it in our school and the results are amazing for students.",
    name: "Mona Hassan",
    role: "Teacher",
  },
];

const Reviews = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % reviewsData.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + reviewsData.length) % reviewsData.length);
  };

  return (
    <div className="reviews-section">
      <h1 className="reviews-title">What Our Users Say</h1>
      <p className="reviews-subtitle">
        Thousands of students, parents, and schools trust Moufakker
      </p>

      <div className={`review-card card-${index}`}>
        <h1 className="quote">“</h1>

        <p className="review-text">{reviewsData[index].text}</p>

        <div className="review-user">
          <div className="avatar">👩</div>
          <div>
            <h2>{reviewsData[index].name}</h2>
            <p>{reviewsData[index].role}</p>
          </div>
        </div>

        <div className="stars">★★★★★</div>
      </div>

      <div className="arrows">
        <h1 onClick={prev}>‹‹</h1>
        <h1 onClick={next}>››</h1>
      </div>

      <div className="rating-box">
        <div className="stars big">★★★★★</div>
        <h2>4.9 out of 5</h2>
        <p>From over 10,000 reviews</p>
      </div>
    </div>
  );
};

export default Reviews;