import React from "react";
import "./TabTab.css";

const TabTab = () => {
  return (
    <div className="chat-wrapper">
      <div className="chat-container">

        {/* Header */}
        <div className="chat-header">
          <div className="bot-info">
            <div className="bot-icon">🤖</div>
            <div>
              <h2 className="bot-name">Mufakker Smart Assistant</h2>
              <p className="bot-status">● Available Now</p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="chat-body">

          <div className="message user">
            <p>What's the best way to understand quadratic equations?</p>
          </div>

          <div className="message bot">
            <p>
              Hello! I’ll help you understand quadratic equations in an easy way. Let’s start with the basics.
            </p>
          </div>

          <div className="message user">
            <p>Thanks! Can you give me a practical example?</p>
          </div>

          <div className="message bot">
            <p>Of course! Let’s take the equation x² + 5x + 6 = 0.</p>
          </div>

        </div>

        {/* Input */}
        <div className="chat-input">
          <input type="text" placeholder="Type your question here..." />
          <button>Send</button>
        </div>

      </div>
    </div>
  );
};

export default TabTab;