import React, { useEffect, useState } from "react";
import "./IntroAnimation.css";
import { supabase } from "../../supabaseClient";

const cards = [
  { title: "Study Plan", color: "purple", icon: "📅" },
  { title: "Progress",   color: "yellow", icon: "📈" },
  { title: "Goals",      color: "green",  icon: "🎯" },
  { title: "Tasks",      color: "blue",   icon: "✔" },
  { title: "Wellness",   color: "pink",   icon: "💜" },
];

const CARDS_DURATION = 8500;
const PHONE_DURATION = 4000;
const EXIT_DURATION  = 700;

export default function IntroAnimation() {
  const [phase, setPhase]       = useState("cards");
  const [cycleKey, setCycleKey] = useState(0);
  const [hero, setHero]         = useState(null);

  useEffect(() => {
    const fetchHero = async () => {
      const { data } = await supabase
        .from("home_hero")
        .select("*")
        .eq("screen_id", 1)
        .single();

      if (data) setHero(data);
    };
    fetchHero();
  }, []);

  useEffect(() => {
    let timer;
    if (phase === "cards") {
      timer = setTimeout(() => setPhase("phone"), CARDS_DURATION);
    } else if (phase === "phone") {
      timer = setTimeout(() => setPhase("exiting"), PHONE_DURATION);
    } else if (phase === "exiting") {
      timer = setTimeout(() => {
        setCycleKey((k) => k + 1);
        setPhase("cards");
      }, EXIT_DURATION);
    }
    return () => clearTimeout(timer);
  }, [phase]);

  return (
    <>
      <div className="bg-animated" />
      <div className="bg-glow" />

      <div className="hero-layout">

        {/* LEFT */}
        <div className="hero-left">
          <h1>{hero?.title || "Study Smarter"}</h1>
          <p>{hero?.subtitle || "Transform chaotic studying into a calm, organized system. Built for the next generation of learners."}</p>

          <div className="hero-buttons">
            <button className="cta primary">{hero?.cta_primary || "Get Started Free"}</button>
            <button className="cta secondary">{hero?.cta_secondary || "▶ Watch Demo"}</button>
          </div>

          <p className="extra-text">{hero?.extra_text || "Join thousands of students who already improved their focus, productivity, and learning habits with our smart study system."}</p>

          <div className="stats">
            <div className="stat-box"><h3>{hero?.stat1_value || "10K+"}</h3><span>{hero?.stat1_label || "Students"}</span></div>
            <div className="stat-box"><h3>{hero?.stat2_value || "95%"}</h3><span>{hero?.stat2_label || "Success"}</span></div>
            <div className="stat-box"><h3>{hero?.stat3_value || "4.9★"}</h3><span>{hero?.stat3_label || "Rating"}</span></div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-right">
          <div className="intro-wrapper">

            {phase === "cards" && (
              <div className="cards-scene" key={cycleKey}>
                {cards.map((card, index) => (
                  <div key={index} className={`floating-card ${card.color} card-${index + 1}`}>
                    <span className="card-icon">{card.icon}</span>
                    <h4>{card.title}</h4>
                    <div className="line short" />
                    <div className="line" />
                  </div>
                ))}
              </div>
            )}

            {(phase === "phone" || phase === "exiting") && (
              <div className={`phone-scene ${phase === "exiting" ? "phone-exit" : "phone-enter"}`}>
                <div className="phone-glow" />
                <div className="phone">
                  <div className="phone-notch"><div className="notch-camera" /></div>
                  <div className="phone-screen">
                    <div className="screen-hero stagger-1">
                      <div className="screen-hero-top">
                        <div>
                          <div className="screen-hello">Hello, Malek!</div>
                          <div className="screen-date">Tuesday, March 10, 2026</div>
                        </div>
                        <div className="screen-bell">🔔<span className="bell-badge">1</span></div>
                      </div>
                      <div className="progress-row"><span>Study Progress</span><span>65%</span></div>
                      <div className="progress-track"><div className="progress-fill" /></div>
                      <div className="progress-caption">Great work this week! Keep it up! 🌟</div>
                    </div>
                    <div className="quick-actions stagger-2">
                      <div className="qa-btn"><span className="qa-icon">📖</span><span>Study</span></div>
                      <div className="qa-btn qa-active"><span className="qa-icon">📦</span><span>AR</span></div>
                      <div className="qa-btn"><span className="qa-icon">🌿</span><span>Wellness</span></div>
                    </div>
                    <div className="plan-header stagger-3">
                      <span className="plan-title">Today's Plan</span>
                      <span className="plan-viewall">View All</span>
                    </div>
                    <div className="plan-item stagger-4">
                      <div className="plan-time">09:00</div>
                      <div className="plan-info">
                        <div className="plan-subject">Math</div>
                        <div className="plan-desc">Algebra practice</div>
                      </div>
                      <div className="plan-check" />
                    </div>
                    <div className="plan-item stagger-5">
                      <div className="plan-time">11:00</div>
                      <div className="plan-info">
                        <div className="plan-subject">Physics</div>
                        <div className="plan-desc">Waves chapter review</div>
                      </div>
                      <div className="plan-check" />
                    </div>
                    <div className="plan-item stagger-6">
                      <div className="plan-time">14:00</div>
                      <div className="plan-info">
                        <div className="plan-subject">English</div>
                        <div className="plan-desc">Essay writing</div>
                      </div>
                      <div className="plan-check done">✓</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </>
  );
}