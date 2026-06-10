import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import logo from "../../Assets/navlogo.png";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const close = () => setMenuOpen(false);

  return (
    <div className="nav-wrapper">
      <nav className="navbar">

        <ul className="nav-left">
          <li><Link to="/IWorks" onClick={close}>How It Works</Link></li>
          <li><Link to="/Careers" onClick={close}>Career</Link></li>
          <li><Link to="/Pricesscreen" onClick={close}>Pricing</Link></li>
        </ul>

        <div className="logo">
          <Link to="/" onClick={close}><img src={logo} alt="logo" /></Link>
        </div>

        <ul className="nav-right">
          <li className="dropdown">
            Resources
            <ul className="submenu">
              <li><Link to="/Blogs" onClick={close}>Blogs</Link></li>
              <li><Link to="/SevicesScreen" onClick={close}>Our Services</Link></li>
              <li><Link to="/FaqScreen" onClick={close}>FAQ</Link></li>
            </ul>
          </li>

          <li className="dropdown">
            About
            <ul className="submenu">
              <li><Link to="/AboutUs" onClick={close}>About us</Link></li>
              <li><Link to="/ForParents" onClick={close}>For Parents</Link></li>
              <li><Link to="/ForStudent" onClick={close}>For Students</Link></li>
              <li><Link to="/ForSchool" onClick={close}>For Schools</Link></li>
            </ul>
          </li>

          <li><Link to="/ContactUs" onClick={close}>Contact us</Link></li>
        </ul>

        {/* Burger — mobile only */}
        <button
          className={`burger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>

      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <ul>
          <li><Link to="/IWorks" onClick={close}>How It Works</Link></li>
          <li><Link to="/Careers" onClick={close}>Career</Link></li>
          <li><Link to="/Pricesscreen" onClick={close}>Pricing</Link></li>
          <li className="mobile-divider">Resources</li>
          <li><Link to="/Blogs" onClick={close}>Blogs</Link></li>
          <li><Link to="/SevicesScreen" onClick={close}>Our Services</Link></li>
          <li><Link to="/FaqScreen" onClick={close}>FAQ</Link></li>
          <li className="mobile-divider">About</li>
          <li><Link to="/AboutUs" onClick={close}>About us</Link></li>
          <li><Link to="/ForParents" onClick={close}>For Parents</Link></li>
          <li><Link to="/ForStudent" onClick={close}>For Students</Link></li>
          <li><Link to="/ForSchool" onClick={close}>For Schools</Link></li>
          <li><Link to="/ContactUs" onClick={close}>Contact us</Link></li>
        </ul>
      </div>

    </div>
  );
};

export default Nav;