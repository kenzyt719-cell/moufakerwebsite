import React, { useState } from "react";
import "./DayLayoutbox.css";

const DayLayoutbox = ({ title, subtitle, boxes }) => {
  const [showBoxes, setShowBoxes] = useState(false);

  const handleMouseEnter = () => {
    setShowBoxes(true); // يبدأ عرض البوكسات
  };

  return (
    <div className="divone">
      <h1 className="h1dayinlife">{title}</h1>
      <p className="ptitle">{subtitle}</p>

      <div className="boxesmaindiv" onMouseEnter={handleMouseEnter}>
        {boxes.map((box, index) => (
          <div
            key={index}
            className={`boxsesday ${showBoxes ? "show" : ""}`}
            style={{ transitionDelay: `${index * 0.2}s` }} // تأخير لكل بوكس
          >
            <div className="boxsesmain">
              {box.icon && <img src={box.icon} alt="icon" className="box-icon" />}
              <div className="box-text">
                <p className="titleinbox">{box.title}</p>
                <p className="titleinbox02">{box.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DayLayoutbox;