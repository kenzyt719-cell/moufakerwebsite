import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import logo from "../../Assets/navlogo.png";

const Nav = () => {
  return (
    <div className="nav-wrapper">
      <nav className="navbar">

        {/* Left menu */}
        <ul className="nav-left">
          <li><Link to="/IWorks">How It Works</Link></li>
          <li><Link to="/Pricesscreen">Career</Link></li>
          <li><Link to="/Pricesscreen">Pricing</Link></li>
        </ul>

        {/* Logo */}
        <div className="logo">
          <Link to="/"><img src={logo} alt="logo" /></Link>
        </div>

        {/* Right menu */}
        <ul className="nav-right">
          <li className="dropdown">
            Resources
            <ul className="submenu">
              <li><Link to="/Blogs">Blogs</Link></li>
              <li><Link to="/SevicesScreen">Our Services</Link></li>
              <li><Link to="/FaqScreen">FAQ</Link></li>
            </ul>
          </li>

          <li className="dropdown">
            About
            <ul className="submenu">
              <li><Link to="/ContactUs">About us</Link></li>
              <li><Link to="/ForSchool">For Parents</Link></li>
              <li><Link to="/ForSchool">For Students</Link></li>
              <li><Link to="/ForSchool">For Schools</Link></li>
            </ul>
          </li>

          <li><Link to="/ContactUs">Contact us</Link></li>
        </ul>

      </nav>
    </div>
  );
};

export default Nav;