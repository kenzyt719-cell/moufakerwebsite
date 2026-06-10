import React, { useState } from "react";
import "./ForStudent.css";
import Nav from "../Components/Layout/Nav";

const BoltIcon   = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
const BrainIcon  = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-1.04-4.79A4.65 4.65 0 0 1 5 13c0-1.56.8-2.93 2-3.77A3.5 3.5 0 0 1 9.5 2z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 1.04-4.79A4.65 4.65 0 0 0 19 13c0-1.56-.8-2.93-2-3.77A3.5 3.5 0 0 0 14.5 2z"/></svg>;
const TargetIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>;
const ClockIcon  = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
const StarIcon   = () => <svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>;
const CheckIcon  = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>;
const FlameIcon  = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>;
const TrophyIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/></svg>;
const BookIcon   = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>;
const AtomIcon   = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="1"/><path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5z"/><path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5z"/></svg>;
const PenIcon    = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>;
const GlobeIcon  = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>;
const MathIcon   = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="5" x2="5" y2="19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>;

const tools = [
  { icon: <BrainIcon />,  color: "#a855f7", title: "AI Tutor",      desc: "Ask anything, get instant step-by-step explanations tailored to your level." },
  { icon: <TargetIcon />, color: "#06b6d4", title: "Smart Planner", desc: "Auto-builds your daily study schedule based on exams, deadlines, and energy levels." },
  { icon: <ClockIcon />,  color: "#f97316", title: "Focus Timer",   desc: "Pomodoro sessions with wellness check-ins so you study smarter, not longer." },
  { icon: <TrophyIcon />, color: "#f5c842", title: "Achievements",  desc: "Earn badges, level up, and compete on leaderboards as you hit your learning goals." },
];

const subjects = [
  { icon: <MathIcon />,  label: "Math",    color: "#06b6d4" },
  { icon: <AtomIcon />,  label: "Science", color: "#a855f7" },
  { icon: <BookIcon />,  label: "Arabic",  color: "#f97316" },
  { icon: <GlobeIcon />, label: "English", color: "#22c55e" },
  { icon: <PenIcon />,   label: "History", color: "#ef4444" },
  { icon: <BoltIcon />,  label: "Physics", color: "#f5c842" },
];

const stats = [
  { value: "94%",  label: "Average Grade Improvement" },
  { value: "3×",   label: "Faster Exam Prep" },
  { value: "50K+", label: "Active Students" },
  { value: "4.9★", label: "Student Rating" },
];

const streakDays = ["M", "T", "W", "T", "F", "S", "S"];
const streakDone = [true, true, true, true, false, false, false];

const pillars = [
  { bg: "#2d1b69", title: "Smart Learning",    desc: "AI-powered study paths that adapt to your strengths, weaknesses, and learning style in real-time.", items: ["Personalized Curriculum", "Adaptive Quizzes", "Instant Feedback", "Progress Reports"] },
  { bg: "#1e1057", title: "Wellness & Balance", desc: "Your mental health matters. Built-in wellness check-ins, break reminders, and stress tracking keep you at your best.", items: ["Mood Tracking", "Break Reminders", "Stress Alerts", "Sleep Tips"] },
  { bg: "#150b40", title: "Exam Mastery",       desc: "Crush every exam with targeted practice, predicted questions, and performance analytics that show exactly what to focus on.", items: ["Past Paper Bank", "Predicted Questions", "Timed Mock Exams", "Grade Simulator"] },
];

const ForStudent = () => {
  const [activeSubject, setActiveSubject] = useState(0);

  return (
    <div className="fst">
 <Nav />
    
      {/* Hero */}
      <section className="fst-hero">
        <div className="fst-rings">
          <div className="fst-ring fst-r1" />
          <div className="fst-ring fst-r2" />
          <div className="fst-ring fst-r3" />
        </div>
        <div className="fst-hero-content">
          <div className="fst-badge"><FlameIcon /> Now used by 50,000+ students</div>
          <h1>Study Smarter.<br />Score Higher.<br />Stress Less.</h1>
          <p>Muffaker is your AI-powered study companion — personalized to your subjects, your schedule, and your mental wellbeing.</p>
          <div className="fst-hero-btns">
            <button className="fst-cta-primary">Start For Free</button>
            <button className="fst-cta-secondary">Watch Demo</button>
          </div>
          <p className="fst-hero-note">No credit card required · Works on all devices</p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="fst-statsbar">
        {stats.map((s, i) => (
          <div className="fst-stat" key={i}>
            <span className="fst-stat-val">{s.value}</span>
            <span className="fst-stat-lbl">{s.label}</span>
          </div>
        ))}
      </section>

      {/* AI Companion */}
      <section className="fst-companion">
        <div className="fst-companion-inner">
          <div className="fst-chat">
            <div className="fst-chat-header">
              <div className="fst-chat-avatar"><BrainIcon /></div>
              <div>
                <div className="fst-chat-name">Muffaker AI</div>
                <div className="fst-chat-status">● Online</div>
              </div>
            </div>
            <div className="fst-chat-body">
              <div className="fst-msg fst-msg-ai">Hey! Ready to crush today's Physics chapter? 🚀 I prepared a 20-min session for you.</div>
              <div className="fst-msg fst-msg-user">Yes! But I'm struggling with Newton's 3rd Law.</div>
              <div className="fst-msg fst-msg-ai">
                No worries! Let's break it down with a real example. Imagine you're pushing a wall...
                <div className="fst-msg-formula">F<sub>AB</sub> = −F<sub>BA</sub></div>
              </div>
              <div className="fst-msg fst-msg-user">Oh that makes sense now!</div>
              <div className="fst-msg fst-msg-ai">Great! Let's try a quick quiz to lock it in. 🎯</div>
            </div>
            <div className="fst-streak">
              <div className="fst-streak-top"><FlameIcon /> <span>4-day streak! Keep it up 🔥</span></div>
              <div className="fst-streak-days">
                {streakDays.map((d, i) => (
                  <div key={i} className={`fst-sday ${streakDone[i] ? "done" : ""}`}>
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="fst-companion-text">
            <h2>Your Personal<br />AI Study Companion</h2>
            <p>Get real explanations, not just answers. Muffaker's AI tutor understands exactly where you're stuck and guides you step-by-step until it clicks.</p>
            <ul className="fst-companion-list">
              {[
                "Explains concepts in simple Arabic or English",
                "Adapts difficulty to your current level",
                "Available 24/7 — before every exam",
                "Tracks what you've learned so far",
              ].map((item, i) => (
                <li key={i}><span className="fst-tick"><CheckIcon /></span>{item}</li>
              ))}
            </ul>
            <button className="fst-cta-primary">Try AI Tutor Free</button>
          </div>
        </div>
      </section>

      {/* Daily Toolkit */}
      <section className="fst-tools">
        <h2>Your Daily Toolkit</h2>
        <p className="fst-sub">Everything you need in one place — no more switching between apps</p>
        <div className="fst-tools-grid">
          {tools.map((t, i) => (
            <div className="fst-tool-card" key={i}>
              <div className="fst-tool-icon" style={{ background: t.color + "22", color: t.color }}>{t.icon}</div>
              <h3>{t.title}</h3>
              <p>{t.desc}</p>
              <div className="fst-tool-arrow" style={{ color: t.color }}>→</div>
            </div>
          ))}
        </div>
      </section>

      {/* Subjects */}
      <section className="fst-subjects">
        <h2>All Your Subjects. One Platform.</h2>
        <p className="fst-sub">Full Egyptian curriculum coverage from Grade 7 to Grade 12</p>
        <div className="fst-subjects-grid">
          {subjects.map((s, i) => (
            <div
              key={i}
              className={`fst-subject-card ${activeSubject === i ? "active" : ""}`}
              style={{ "--subj-color": s.color }}
              onClick={() => setActiveSubject(i)}
            >
              <div className="fst-subj-icon" style={{ color: s.color, background: s.color + "22" }}>{s.icon}</div>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Three Pillars */}
      <section className="fst-pillars">
        <h2>Three Pillars of Student Success</h2>
        <div className="fst-pillars-list">
          {pillars.map((p, i) => (
            <div className="fst-pillar" key={i} style={{ background: p.bg }}>
              <div className="fst-pillar-stripe" />
              <div className="fst-pillar-left">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <button className="fst-pillar-btn">Explore</button>
              </div>
              <div className="fst-pillar-right">
                {p.items.map((item, j) => (
                  <div className="fst-pillar-item" key={j}>
                    <span className="fst-check"><CheckIcon /></span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="fst-final">
        <div className="fst-final-glow" />
        <div className="fst-final-content">
          <h2>Ready to Transform How You Study?</h2>
          <p>Join 50,000+ Egyptian students already achieving more with Muffaker.</p>
          <button className="fst-cta-primary fst-cta-lg">Start Your Free Trial</button>
          <div className="fst-stars">
            {[...Array(5)].map((_, i) => <span key={i} className="fst-star"><StarIcon /></span>)}
            <span className="fst-stars-text">Rated 4.9/5 by students</span>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ForStudent;