import React from "react";
import "./AboutUs.css";
import Nav from "../Components/Layout/Nav";

const IconInnovation = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2a7 7 0 0 1 7 7c0 2.6-1.4 4.9-3.5 6.2V17a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-1.8C6.4 13.9 5 11.6 5 9a7 7 0 0 1 7-7z"/>
    <path d="M9 21h6M10 17v4M14 17v4"/>
  </svg>
);
const IconWellness = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);
const IconAccessibility = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);
const IconData = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
  </svg>
);
const IconTrust = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);
const IconCommunity = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const stats = [
  { value: "50,000+",    label: "Active Students" },
  { value: "2,500,000+", label: "Learning Hours Saved" },
  { value: "27",         label: "Governorates Reached" },
];

const values = [
  { icon: <IconInnovation />,    color: "#f97316", title: "Innovation",        desc: "Constantly pushing boundaries with cutting-edge AI and educational technology." },
  { icon: <IconWellness />,      color: "#ef4444", title: "Mental Wellness",   desc: "Prioritizing student mental health alongside academic achievement." },
  { icon: <IconAccessibility />, color: "#3b82f6", title: "Accessibility",     desc: "High-quality education support available to every student, everywhere." },
  { icon: <IconData />,          color: "#a855f7", title: "Data Intelligence", desc: "Leveraging AI to provide personalized, effective learning experiences." },
  { icon: <IconTrust />,         color: "#22c55e", title: "Trust",             desc: "Maintaining the highest standards of privacy, security, and ethical use." },
  { icon: <IconCommunity />,     color: "#f97316", title: "Community",         desc: "Building a supportive ecosystem of students, parents, and educators." },
];

const team = [
  { name: "Ahmed Hassan",  role: "Founder & CEO" },
  { name: "Nour Mahmoud", role: "Chief Officer" },
  { name: "Omar Youssef", role: "Head of Tech" },
  { name: "Sara Ali",     role: "Product Designer" },
];

const whyCards = [
  { color: "#a855f7", title: "The Challenge", icon: "⚡", text: "Egyptian students (ages 13+) face low intervention pressure and experience high stress levels — all while lacking personalized learning support and mental wellness resources." },
  { color: "#3b82f6", title: "Our Response",  icon: "💡", text: "We combined AI technology with educational psychology to create a platform that doesn't just help students study — it helps them thrive mentally and academically." },
  { color: "#22c55e", title: "The Impact",    icon: "🌍", text: "Today Muffaker supports 50,000+ students across Egypt and the MENA region, helping them achieve better grades while maintaining mental wellness." },
];

const AboutUs = () => {
  return (
    <div className="home">
 <Nav />
      {/* Hero */}
      <section className="hero">
        <div className="hero-glow" />
        <div className="hero-content">
          <h1>Transforming Education<br />for Every Egyptian Student</h1>
          <p>To empower every student with smart planning tools, structured learning systems, and wellness support that make academic success clear, balanced, and achievable for all.</p>
          <button className="cta-btn">Start Your Free Trial</button>
        </div>
      </section>

      {/* Founder's Vision */}
      <section className="founders">
        <div className="founders-inner">
          <div className="founders-text">
            <h2>Our Founder's Vision</h2>
            <blockquote>"Growing up in Egypt, I witnessed countless talented students struggle not because they lacked potential, but because the educational system couldn't adapt to their individual needs."</blockquote>
            <p>"Muffaker was born from a simple belief: that technology, especially AI, can bridge this gap and unlock the potential of millions of Egyptian students."</p>
          </div>
          <div className="founders-img">
            <img src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80" alt="Classroom" />
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="impact">
        <h2>Our Impact in Egypt</h2>
        <p className="section-sub">Making a real difference in students' lives</p>
        <div className="stats-grid">
          {stats.map((s, i) => (
            <div className="stat-card" key={i}>
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="values">
        <h2>Our Core values</h2>
        <p className="section-sub">The principles that guide everything we do</p>
        <div className="values-grid">
          {values.map((v, i) => (
            <div className="value-card" key={i}>
              <div className="value-icon" style={{ color: v.color, background: v.color + "22" }}>{v.icon}</div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="team">
        <h2>Meet Our Team</h2>
        <p className="section-sub">The brilliant minds behind Muffaker</p>
        <div className="team-grid">
          {team.map((m, i) => (
            <div className="team-card" key={i}>
              <div className="team-photo">
                <img src={`https://i.pravatar.cc/150?img=${i + 10}`} alt={m.name} />
              </div>
              <h3>{m.name}</h3>
              <p>{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why We Built */}
      <section className="why">
        <h2>Why We Built Muffaker</h2>
        <div className="why-inner">
          <div className="why-cards">
            {whyCards.map((c, i) => (
              <div className="why-card" key={i} style={{ borderLeft: `4px solid ${c.color}` }}>
                <div className="why-card-title">
                  <span className="why-icon" style={{ background: c.color + "33", color: c.color }}>{c.icon}</span>
                  <h3 style={{ color: c.color }}>{c.title}</h3>
                </div>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
          <div className="why-img">
            <img src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=600&q=80" alt="Students" />
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;