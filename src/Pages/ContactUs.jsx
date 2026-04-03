import React from "react";
import "./ContactUs.css";
import icon from "../../src/Assets/bb01.png";
const ContactUs = () => {
  return (
    <div className="contact-section">

      {/* LEFT - FORM */}
      <div className="contact-form">
        <h1>Send us a Message</h1>

        <div className="input-group">
          <p>Your Name</p>
          <div className="input-box">Ahmed Hassan</div>
        </div>

        <div className="input-group">
          <p>Email Address</p>
          <div className="input-box">ahmed@example.com</div>
        </div>

        <div className="input-group">
          <p>Subject</p>
          <div className="input-box">I have a question about...</div>
        </div>

        <div className="input-group">
          <p>Message</p>
          <div className="input-box textarea">
            Tell us how we can help you...
          </div>
        </div>

        <div className="btn-send">Send Now</div>
      </div>

      {/* RIGHT SIDE */}
      <div className="contact-right">

        {/* CONTACT INFO */}
        <div className="contact-card">
          <h1>Contact Information</h1>

          <div className="info-item">
            <img src={icon} alt="" />
            <div>
              <h3>Email</h3>
              <p>support@moufakker.com</p>
            </div>
          </div>

          <div className="info-item">
            <img src={icon} alt="" />
            <div>
              <h3>Phone</h3>
              <p>+20 123 456 7890</p>
            </div>
          </div>

          <div className="info-item">
            <img src={icon} alt="" />
            <div>
              <h3>Office</h3>
              <p>Cairo, Egypt</p>
            </div>
          </div>

          <div className="info-item">
            <img src={icon} alt="" />
            <div>
              <h3>Live Chat</h3>
              <p>Available Mon-Fri, 9am–6pm EET</p>
            </div>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="contact-card">
          <h1>Quick Links</h1>

          <p className="link">→ View Pricing Plans</p>
          <p className="link">→ How Moufakker Works</p>
          <p className="link">→ School Partnerships</p>
          <p className="link">→ Read Our Blog</p>
        </div>

      </div>
    </div>
  );
};

export default ContactUs;