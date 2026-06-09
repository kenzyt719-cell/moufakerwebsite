import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { jobs } from "./Careers";
import Nav from "../Components/Layout/Nav";
import "./CareerApply.css";

export default function CareerApply() {
  const { id } = useParams();
  const navigate = useNavigate();
  const job = jobs.find((j) => j.id === parseInt(id));

  const [form, setForm] = useState({
    name: "", email: "", phone: "", linkedin: "", coverLetter: "", cv: null,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState("");

  if (!job) {
    return (
      <div className="apply-page">
        <Nav />
        <p style={{ color: "#fff", textAlign: "center", marginTop: 100 }}>Job not found.</p>
        <div style={{ textAlign: "center", marginTop: 20 }}>
          <button className="back-btn" onClick={() => navigate("/careers")}>← Back to Careers</button>
        </div>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({ ...prev, [name]: files ? files[0] : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1800));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="apply-page">
        <Nav />
        <div className="apply-bg-orb orb1" />
        <div className="apply-bg-orb orb2" />
        <div className="success-screen">
          <div className="success-confetti">🎉</div>
          <h2>You're In the Running!</h2>
          <p>
            Your application for <strong>{job.title}</strong> has been received.
            We'll review it carefully and reach out within 5–7 business days.
          </p>
          <div className="success-details">
            <div className="success-tag">{job.dept}</div>
            <div className="success-tag">{job.location}</div>
            <div className="success-tag">{job.type}</div>
          </div>
          <button className="cta-yellow" onClick={() => navigate("/careers")}>
            ← Explore More Positions
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="apply-page">
      <Nav />

      <div className="apply-bg-orb orb1" />
      <div className="apply-bg-orb orb2" />
      <div className="apply-bg-orb orb3" />

      <div className="apply-inner">

        {/* LEFT */}
        <div className="apply-left">

          <h1 className="apply-title">{job.title}</h1>

          <div className="apply-meta">
            <span className="meta-pill">📍 {job.location}</span>
            <span className="meta-pill">🕐 {job.type}</span>
          </div>

          <p className="apply-desc">{job.description}</p>

          <div className="req-box">
            <h3>What we're looking for</h3>
            <ul>
              {job.requirements.map((r, i) => (
                <li key={i}>
                  <span className="req-check">✦</span> {r}
                </li>
              ))}
            </ul>
          </div>

          <div className="perks-row">
            <div className="perk">🚀 Fast Growth</div>
            <div className="perk">💡 Impactful Work</div>
            <div className="perk">🌍 Remote Options</div>
          </div>

        </div>

        {/* RIGHT */}
        <div className="apply-right">
          <div className="form-card">
            <div className="form-card-header">
              <h2>Apply Now</h2>
              <p>Takes less than 3 minutes</p>
            </div>

            <form className="apply-form" onSubmit={handleSubmit}>

              <div className="form-row">
                <div className={`form-group ${focused === "name" ? "active" : ""}`}>
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Ahmed Mohamed"
                    value={form.name}
                    onChange={handleChange}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused("")}
                    required
                  />
                </div>
                <div className={`form-group ${focused === "email" ? "active" : ""}`}>
                  <label>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="ahmed@email.com"
                    value={form.email}
                    onChange={handleChange}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused("")}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className={`form-group ${focused === "phone" ? "active" : ""}`}>
                  <label>Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+20 100 000 0000"
                    value={form.phone}
                    onChange={handleChange}
                    onFocus={() => setFocused("phone")}
                    onBlur={() => setFocused("")}
                    required
                  />
                </div>
                <div className={`form-group ${focused === "linkedin" ? "active" : ""}`}>
                  <label>LinkedIn Profile</label>
                  <input
                    type="url"
                    name="linkedin"
                    placeholder="linkedin.com/in/..."
                    value={form.linkedin}
                    onChange={handleChange}
                    onFocus={() => setFocused("linkedin")}
                    onBlur={() => setFocused("")}
                  />
                </div>
              </div>

              <div className={`form-group full ${focused === "cover" ? "active" : ""}`}>
                <label>Cover Letter *</label>
                <textarea
                  name="coverLetter"
                  rows={5}
                  placeholder="Tell us why you're the perfect fit for this role..."
                  value={form.coverLetter}
                  onChange={handleChange}
                  onFocus={() => setFocused("cover")}
                  onBlur={() => setFocused("")}
                  required
                />
              </div>

              <div className="form-group full">
                <label>CV / Resume *</label>
                <div className="file-upload">
                  <input
                    type="file"
                    name="cv"
                    id="cv"
                    accept=".pdf,.doc,.docx"
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="cv" className={`file-label ${form.cv ? "has-file" : ""}`}>
                    {form.cv
                      ? <><span className="file-icon">📄</span> {form.cv.name}</>
                      : <><span className="file-icon">📎</span> Click to upload PDF or DOC</>
                    }
                  </label>
                </div>
              </div>

              <button type="submit" className="cta-yellow" disabled={loading}>
                {loading
                  ? <span className="loading-dots">Submitting<span>.</span><span>.</span><span>.</span></span>
                  : "Submit Application →"
                }
              </button>

            </form>
          </div>
        </div>

      </div>
    </div>
  );
}