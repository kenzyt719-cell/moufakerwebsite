import React from "react";
import "./Pricing.css";
import icon from "../../Assets/Container.png";


const Pricing = () => {
  return (
    <div className="pricing-wrapper">
      <div className="pricing-container">

        {/* BASIC */}
        <div className="card blue">
          <img src={icon} alt="icon" className="icon" />

          <h2>Basic</h2>
          <p className="desc">Perfect for students getting started</p>

          <h1 className="price">99 <span>EGP /mo</span></h1>

          <div className="features">
            <p>✔ AI-powered study assistant</p>
            <p>✔ Access to 500+ courses</p>
            <p>✔ Basic progress tracking</p>
            <p>✔ Email support</p>
            <p>✔ Mobile app access</p>
            <p>✔ Study planner</p>
          </div>

          <button className="btn">Get Started</button>
        </div>

        {/* PRO */}
        <div className="card pink">
          <div className="badge">Most Popular</div>

          <img src={icon} alt="icon" className="icon" />

          <h2>Pro</h2>
          <p className="desc">Most popular for serious learners</p>

          <h1 className="price">199 <span>EGP /mo</span></h1>

          <div className="features">
            <p>✔ Everything in Basic</p>
            <p>✔ Access to 1,200+ courses</p>
            <p>✔ Advanced AI tutor</p>
            <p>✔ Priority support</p>
            <p>✔ Offline mode</p>
            <p>✔ Personalized learning paths</p>
            <p>✔ AR learning experiences</p>
            <p>✔ PDF narration</p>
          </div>

          <button className="btn gradient">Get Started</button>
        </div>

        {/* PREMIUM */}
        <div className="card orange">
          <img src={icon} alt="icon" className="icon" />

          <h2>Premium</h2>
          <p className="desc">Complete learning ecosystem</p>

          <h1 className="price">299 <span>EGP /mo</span></h1>

          <div className="features">
            <p>✔ Everything in Pro</p>
            <p>✔ Unlimited courses</p>
            <p>✔ 1-on-1 expert tutoring</p>
            <p>✔ 24/7 priority support</p>
            <p>✔ Family sharing</p>
            <p>✔ School integration</p>
            <p>✔ Custom study plans</p>
            <p>✔ Smartwatch sync</p>
            <p>✔ Early access to features</p>
          </div>

          <button className="btn">Get Started</button>
        </div>

      </div>
    </div>
  );
};

export default Pricing;