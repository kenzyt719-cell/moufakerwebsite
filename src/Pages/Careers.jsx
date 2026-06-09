import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Careers.css";

const values = [
  { icon: "🤍", title: "Impact First",    sub: "Make a real difference" },
  { icon: "👥", title: "Collaborative",   sub: "Work with amazing people" },
  { icon: "⚡", title: "Innovation",      sub: "Push boundaries daily" },
  { icon: "🌐", title: "Growth",          sub: "Continuous learning" },
];

export const jobs = [
  {
    id: 1,
    title: "Senior AI Engineer",
    dept: "Engineering",
    location: "Cairo",
    type: "Full-time",
    description: "Lead the development of our AI-powered study engine. You'll work on NLP models, recommendation systems, and personalized learning algorithms that serve thousands of students.",
    requirements: [
      "5+ years of ML/AI engineering experience",
      "Proficiency in Python, PyTorch or TensorFlow",
      "Experience with NLP and recommendation systems",
      "Strong problem-solving and communication skills",
    ],
  },
  {
    id: 2,
    title: "Education Content Creator",
    dept: "Content",
    location: "Remote",
    type: "Contract",
    description: "Create engaging, curriculum-aligned study content for Egyptian students. You'll work closely with educators to produce materials that make learning effective and enjoyable.",
    requirements: [
      "Background in education or content creation",
      "Strong Arabic and English writing skills",
      "Familiarity with Egyptian school curriculum",
      "Ability to simplify complex topics",
    ],
  },
  {
    id: 3,
    title: "Customer Success Manager",
    dept: "Support",
    location: "Cairo",
    type: "Full-time",
    description: "Own the student and parent experience from onboarding to long-term success. You'll identify churn risks, run check-ins, and ensure every user gets maximum value.",
    requirements: [
      "2+ years in customer success or account management",
      "Excellent communication and empathy skills",
      "Data-driven mindset",
      "Arabic fluency required",
    ],
  },
  {
    id: 4,
    title: "Mobile Developer (React Native)",
    dept: "Engineering",
    location: "Cairo",
    type: "Full-time",
    description: "Build and maintain our React Native app used by thousands of students daily. You'll own key features end-to-end from design handoff to App Store release.",
    requirements: [
      "3+ years React Native experience",
      "Solid understanding of iOS & Android platforms",
      "Experience with REST APIs and state management",
      "Eye for clean, performant UI",
    ],
  },
];

export default function Careers() {
  const [openId, setOpenId] = useState(null);
  const navigate = useNavigate();

  const toggle = (id) => setOpenId(openId === id ? null : id);

  return (
    <div className="careers-page">

      <div className="careers-header">
        <h1>Join Our Mission</h1>
        <p>Help us transform education for millions of Egyptian students</p>
      </div>

      <div className="values-grid">
        {values.map((v, i) => (
          <div className="value-card" key={i}>
            <span className="value-icon">{v.icon}</span>
            <strong>{v.title}</strong>
            <span>{v.sub}</span>
          </div>
        ))}
      </div>

      <div className="positions-section">
        <h2>Open Positions</h2>
        <div className="positions-list">
          {jobs.map((job) => (
            <div className="job-card" key={job.id}>
              <div className="job-card-header" onClick={() => toggle(job.id)}>
                <div>
                  <div className="job-title">{job.title}</div>
                  <div className="job-tags">
                    <span>{job.dept}</span>
                    <span className="dot">•</span>
                    <span>{job.location}</span>
                    <span className="dot">•</span>
                    <span>{job.type}</span>
                  </div>
                </div>
                <span className={`chevron ${openId === job.id ? "open" : ""}`}>›</span>
              </div>

              {openId === job.id && (
                <div className="job-card-body">
                  <p>{job.description}</p>
                  <ul>
                    {job.requirements.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                  <button className="apply-btn" onClick={() => navigate(`/careers/${job.id}`)}>
                    Apply Now →
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}