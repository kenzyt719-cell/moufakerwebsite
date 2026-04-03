import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        
        {/* Left Section */}
        <div className="footer-left">
          <h2 className="logo">Moufakker</h2>
          <p className="arabic">مُفكّر</p>
          <p className="desc">
            A smart educational system combining study planning and mental wellness
            support for Egyptian students
          </p>

          <div className="socials">
            <div>f</div>
            <div>t</div>
            <div>ig</div>
            <div>in</div>
            <div>yt</div>
          </div>
        </div>

        {/* Links Sections */}
        <div className="footer-links">
          <div>
            <h3>Product</h3>
            <p>AI Study Plan</p>
            <p>Study Buddy</p>
            <p>School System</p>
            <p>Pricing</p>
          </div>

          <div>
            <h3>Company</h3>
            <p>About Moufakker</p>
            <p>Team</p>
            <p>Careers</p>
            <p>Blog</p>
          </div>

          <div>
            <h3>Support</h3>
            <p>Help Center</p>
            <p>Contact Us</p>
            <p>FAQ</p>
            <p>Documentation</p>
          </div>

          <div>
            <h3>Legal</h3>
            <p>Privacy</p>
            <p>Terms</p>
            <p>Security</p>
            <p>Compliance</p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© 2026 Moufakker. All rights reserved</p>
        <p>Proudly made in Egypt 🇪🇬</p>
      </div>

      <div className="footer-badges">
        <p>✔ Aligned with Egyptian Ministry of Education</p>
        <p>✔ Part of Egypt's Digital Vision 2030</p>
      </div>
    </div>
  );
}