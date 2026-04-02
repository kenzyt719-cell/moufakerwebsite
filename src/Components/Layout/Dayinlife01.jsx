import React from "react";
import DayLayoutbox from "../Common/DayLayoutbox";
import by01 from "../../Assets/by01.png"; // أيقونة PNG

const Dayinlife01 = () => {
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
    <DayLayoutbox
      title="A Day in Your Life with Moufakker"
      subtitle="From morning to night, we've got your back"
      boxes={boxesData}
    />
  );
};

export default Dayinlife01;