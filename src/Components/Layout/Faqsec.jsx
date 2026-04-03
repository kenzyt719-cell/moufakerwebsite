import React, { useState } from "react";
import "./Faqsec.css";
import girl1 from "../../Assets/girlfaq1.png";
import girl2 from "../../Assets/girlfaq2.png";

const faqData = [
  {
    question: "Can the AI Study Buddy help with all subjects?",
    answer: "Yes! It supports a wide range of subjects including math, science, languages, and more."
  },
  {
    question: "Is it suitable for all grade levels?",
    answer: "Absolutely. It adapts to different learning levels from school to university."
  },
  {
    question: "Can it help with homework?",
    answer: "Yes, it can explain concepts and guide you step by step."
  },
  {
    question: "Is it available 24/7?",
    answer: "Yes, you can use it anytime you need help."
  }
];

const Faqsec = () => {
  const [activeTop, setActiveTop] = useState(null);
  const [activeBottom, setActiveBottom] = useState(null);

  return (
    <>
      {/* TOP ROW */}
      <div className="divmainnfaq">
        <img src={girl1} alt="Girl" className="faq-girl" />

        <div className="bosxesfaw">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faqdiv ${activeTop === index ? "active" : ""}`}
              onClick={() =>
                setActiveTop(activeTop === index ? null : index)
              }
            >
              <div className="faq-header">
                <h1 className="h1faqdiv">{item.question}</h1>
                <span>{activeTop === index ? "▲" : "▼"}</span>
              </div>

              {activeTop === index && (
                <p className="faq-answer">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM ROW */}
      <div className="divmainnfaq">
        <div className="bosxesfaw">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faqdiv ${activeBottom === index ? "active" : ""}`}
              onClick={() =>
                setActiveBottom(activeBottom === index ? null : index)
              }
            >
              <div className="faq-header">
                <h1 className="h1faqdiv">{item.question}</h1>
                <span>{activeBottom === index ? "▲" : "▼"}</span>
              </div>

              {activeBottom === index && (
                <p className="faq-answer">{item.answer}</p>
              )}
            </div>
          ))}
        </div>

        <img src={girl2} alt="Girl" className="faq-girl" />
      </div>
    </>
  );
};

export default Faqsec;