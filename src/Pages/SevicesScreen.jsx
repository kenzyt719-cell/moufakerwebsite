import React from "react";
import "./SevicesScreen.css";
import Nav from "../Components/Layout/Nav";
import Footer from "../Components/Layout/Footer";
import ThreePillarSection from "../Components/Layout/ThreePillarSection";
import Fiftypercentoff from "../Components/Layout/Fiftypercentoff";

const Card = () => {
  return (
    <div className="service-card">
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
  );
};

const ServicesScreen = () => {
  return (
    <>
      <Nav /> {/* Navbar هنا مرة واحدة فقط */}
      <div className="services-screen">
        <Card />
        <Card />
        <Card />
 <Fiftypercentoff />
      </div>
         <ThreePillarSection />

             <Footer />
      
    </>
  );
};

export default ServicesScreen;