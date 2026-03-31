import React from "react";
import "./Nav.css";
import logo from "../../Assets/navlogo.png";

const Nav = () => {
  return (
    <div className="nav-wrapper">
      <nav className="navbar">

        <ul className="nav-left">
          <li>How It Works</li>
          <li>Career</li>
          <li>Pricing</li>
        </ul>

        {/* logo */}
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <ul className="nav-right">
          <li className="dropdown">
            Resources
            <ul className="submenu">
              <li>Blogs</li>
              <li>Our services</li>
              <li>FAQ</li>
            </ul>
          </li>

          <li className="dropdown">
            About
            <ul className="submenu">
              <li>About us</li>
              <li>For Parents</li>
              <li>For Students</li>
              <li>For Schools</li>
            </ul>
          </li>

          <li>Contact us</li>
        </ul>

      </nav>
    </div>
  );
};

export default Nav;
