import React from "react";
import "./Sec03provides.css";
import Boxsesso2dorschooL from "../Common/Boxsesso2dorschooL";
import Titleandsub from "../Common/Titleandsub";
import DayLayoutbox from "../Common/DayLayoutbox";
import by01 from "../../Assets/by01.png"; // أيقونة البوكسات

const Sec03provides = () => {
  const boxesData = [
    {
      title: "Daily Review",
      description: "Celebrate today's achievements! You completed 85% of your plan and earned 250 XP.",
      icon: by01
    },
    {
      title: "Morning Motivation",
      description: "Start your day with inspiring quotes and tips.",
      icon: by01
    },
    {
      title: "Progress Tracker",
      description: "See your learning streak and milestones.",
      icon: by01
    },
    {
      title: "Evening Summary",
      description: "Review what you've learned and plan for tomorrow.",
      icon: by01
    },
  ];

  return (
    <>
      <Titleandsub
        title="What Moufakker Provides"
        subtitle="A comprehensive academic management system that brings structure, organization, and insight to your institution."
      />

      {/* هنا ضفت DayLayoutbox مع props */}
      <DayLayoutbox
        title="A Day in Your Life with Moufakker"
        subtitle="From morning to night, we've got your back"
        boxes={boxesData}
      />
    </>
  );
};

export default Sec03provides;