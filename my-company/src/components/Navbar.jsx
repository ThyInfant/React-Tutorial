import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <header className="header">
      <nav className="header-nav">
        <div className="header-logo">LOGO</div>
        <div className="header-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
