import React from "react";
import "./ForParents.css";
import Nav from "../Components/Layout/Nav";

const EyeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);
const BellIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
    <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
  </svg>
);
const ChartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
  </svg>
);
const LockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);
const FileIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
  </svg>
);
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
    <line x1="12" y1="18" x2="12.01" y2="18"/>
  </svg>
);
const HeartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);
const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const features = [
  { icon: <EyeIcon />,   color: "#06b6d4", title: "Complete Visibility", desc: "Real-time insights into your child's academic performance, study habits, and emotional wellbeing." },
  { icon: <BellIcon />,  color: "#f97316", title: "Smart Alerts",        desc: "Get notified when your child needs support, celebrates achievements, or faces challenges." },
  { icon: <ChartIcon />, color: "#a855f7", title: "Progress Analytics",  desc: "Detailed reports showing academic trends, improvement areas, and success patterns." },
];

const peaceCards = [
  { icon: <LockIcon />,  title: "Data Privacy",     desc: "Your family's data is encrypted and never shared with third parties." },
  { icon: <FileIcon />,  title: "Detailed Reports", desc: "Weekly and monthly reports delivered directly to your email." },
  { icon: <PhoneIcon />, title: "Mobile Access",    desc: "Track everything anywhere with our beautifully-designed mobile app." },
  { icon: <HeartIcon />, title: "Smart Alerts",     desc: "Get notified immediately if we detect any signs of emotional activity." },
];

const pillars = [
  { bg: "#2d1b69", title: "School Integration",  desc: "Seamless bridge between students, parents, and schools. Real-time updates, attendance tracking, and comprehensive analytics.", items: ["School Portal", "Parent Dashboard", "Teacher Tools", "Ministry Integration"] },
  { bg: "#1e1057", title: "Parent Engagement",   desc: "Seamless bridge between students, parents, and schools. Real-time updates, attendance tracking, and comprehensive analytics.", items: ["School Portal", "Parent Dashboard", "Teacher Tools", "Ministry Integration"] },
  { bg: "#150b40", title: "Student Success",     desc: "Seamless bridge between students, parents, and schools. Real-time updates, attendance tracking, and comprehensive analytics.", items: ["School Portal", "Parent Dashboard", "Teacher Tools", "Ministry Integration"] },
];

const ForParents = () => {
  return (
    <div className="fp">
 <Nav />

      {/* Hero */}
      <section className="fp-hero">
        <div className="fp-hero-rings">
          <div className="ring ring-1" />
          <div className="ring ring-2" />
          <div className="ring ring-3" />
        </div>
        <div className="fp-hero-content">
          <h1>Be Part of Their Success</h1>
          <p>Stay connected to your child's academic journey with insights that matter, while giving them the independence they need to thrive.</p>
          <button className="fp-cta">Start Your Free Trial</button>
        </div>
      </section>

      {/* Parent Dashboard */}
      <section className="fp-dashboard">
        <h2>Your Parent Dashboard</h2>
        <p className="fp-sub">Everything you need to know, beautifully organized in one place</p>
        <div className="fp-dash-inner">
          <div className="fp-dash-card">
            <div className="dash-block">
              <span className="dash-label">Today's Overview</span>
              <div className="dash-row">
                <span>Study Time</span>
                <span className="dash-val">3h 40m / 5h</span>
              </div>
              <div className="dash-bar-wrap">
                <div className="dash-bar" style={{ width: "73%" }} />
              </div>
            </div>
            <div className="dash-block">
              <span className="dash-label">Wellness Score</span>
              <div className="dash-dots">
                {[...Array(10)].map((_, i) => (
                  <span key={i} className={`dot ${i < 8 ? "dot-on" : "dot-off"}`} />
                ))}
              </div>
              <span className="dash-note">✓ Excellent mental health this week</span>
            </div>
          </div>
          <div className="fp-dash-features">
            {features.map((f, i) => (
              <div className="fp-feature" key={i}>
                <div className="fp-feature-icon" style={{ background: f.color + "22", color: f.color }}>{f.icon}</div>
                <div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Peace of Mind */}
      <section className="fp-peace">
        <h2>Peace of Mind, Guaranteed</h2>
        <div className="fp-peace-grid">
          {peaceCards.map((c, i) => (
            <div className="fp-peace-card" key={i}>
              <div className="fp-peace-icon">{c.icon}</div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Three Pillars */}
      <section className="fp-pillars">
        <h2>Three Pillars of Excellence</h2>
        <div className="fp-pillars-list">
          {pillars.map((p, i) => (
            <div className="fp-pillar" key={i} style={{ background: p.bg }}>
              <div className="fp-pillar-stripe" />
              <div className="fp-pillar-left">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <button className="fp-pillar-btn">Start Now</button>
              </div>
              <div className="fp-pillar-right">
                {p.items.map((item, j) => (
                  <div className="fp-pillar-item" key={j}>
                    <span className="fp-check"><CheckIcon /></span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default ForParents;