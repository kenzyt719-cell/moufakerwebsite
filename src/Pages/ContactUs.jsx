import React, { useState } from "react";
import "./ContactUs.css";
import Nav from "../Components/Layout/Nav";
import { supabase } from "../supabaseClient";

import icon from "../../src/Assets/bb01.png";
import Titleandsub from "../Components/Common/Titleandsub";
import Footer from "../Components/Layout/Footer";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handleSubmit = async () => {
    const { error } = await supabase.from("contact").insert([
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        number: formData.number,
      },
    ]);

    if (error) {
      console.error(error);
      alert("Error sending message ❌");
    } else {
      alert("Message sent successfully ✅");

      // reset
      setFormData({
        name: "",
        email: "",
        number: "",
        message: "",
      });
    }
  };

  return (
    <>
      <div className="contacthoem">
        <Nav />

        <Titleandsub
          title="Get in touch"
          subtitle="Have questions? We're here to help you discover how Moufakker can transform your learning experience"
        />

        <div className="contact-section">
          {/* LEFT - FORM (NO DESIGN CHANGE) */}
          <div className="contact-form">
            <h1>Send us a Message</h1>

            {/* NAME */}
            <div className="input-group">
              <p>Your Name</p>
              <div
                className="input-box"
                contentEditable
                onInput={(e) =>
                  setFormData({
                    ...formData,
                    name: e.currentTarget.innerText,
                  })
                }
              >
                Ahmed Hassan
              </div>
            </div>

            {/* EMAIL */}
            <div className="input-group">
              <p>Email Address</p>
              <div
                className="input-box"
                contentEditable
                onInput={(e) =>
                  setFormData({
                    ...formData,
                    email: e.currentTarget.innerText,
                  })
                }
              >
                ahmed@example.com
              </div>
            </div>

            {/* NUMBER */}
            <div className="input-group">
              <p>Subject</p>
              <div
                className="input-box"
                contentEditable
                onInput={(e) =>
                  setFormData({
                    ...formData,
                    number: e.currentTarget.innerText,
                  })
                }
              >
                I have a question about...
              </div>
            </div>

            {/* MESSAGE */}
            <div className="input-group">
              <p>Message</p>
              <div
                className="input-box textarea"
                contentEditable
                onInput={(e) =>
                  setFormData({
                    ...formData,
                    message: e.currentTarget.innerText,
                  })
                }
              >
                Tell us how we can help you...
              </div>
            </div>

            <div className="btn-send" onClick={handleSubmit}>
              Send Now
            </div>
          </div>

          {/* RIGHT SIDE (UNCHANGED) */}
          <div className="contact-right">
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

            <div className="contact-card">
              <h1>Quick Links</h1>

              <p className="link">→ View Pricing Plans</p>
              <p className="link">→ How Moufakker Works</p>
              <p className="link">→ School Partnerships</p>
              <p className="link">→ Read Our Blog</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactUs;