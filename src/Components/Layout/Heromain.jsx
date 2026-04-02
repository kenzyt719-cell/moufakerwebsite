// import React, { useEffect, useState } from "react";
// import "./Heromain.css";


// const Heromain = () => {
//   const [showPhone, setShowPhone] = useState(false);
//   const [cardsVisible, setCardsVisible] = useState(false);

//   useEffect(() => {
//     const timer1 = setTimeout(() => setShowPhone(true), 1000); // phone appears first
//     const timer2 = setTimeout(() => setCardsVisible(true), 2000); // cards appear inside
//     return () => {
//       clearTimeout(timer1);
//       clearTimeout(timer2);
//     };
//   }, []);

//   const appCards = ["Tasks", "Study Plan", "Progress", "Wellness"];

//   return (
//     <section className="heromain">
//       <div className="heromain-left">
//         <div className="logo">
//           {/* <img src={logo} alt="Mufakker Logo" /> */}
//           <span>Mufakker مفكّر</span>
//         </div>
//         <h1>Study Smarter</h1>
//         <p>
//           AI-powered learning that transforms chaotic studying into a calm,
//           organized system. Built for the next generation of learners.
//         </p>
//         <button className="cta-btn">Get Started Free ✨</button>
//         <div className="stats">
//           <div><span>10K+</span> Students</div>
//           <div><span>95%</span> Success</div>
//           <div><span>4.9★</span> Rating</div>
//         </div>
//       </div>

//       <div className="heromain-right">
//         {showPhone && (
//           <div className="phone">
//             {appCards.map((card, i) => (
//               <div
//                 key={i}
//                 className={`app-card ${cardsVisible ? "visible" : ""}`}
//                 style={{ transitionDelay: `${i * 300}ms` }}
//               >
//                 {card}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Heromain;