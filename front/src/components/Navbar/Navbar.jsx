import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import "./Navbar.css";

const Navbar = () => {
  const navRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    navRef.current.classList.toggle("responsive_nav");
  };

  const closeNavbar = () => {
    setIsOpen(false);
    navRef.current.classList.remove("responsive_nav");
  };

  return (
    <header>
      <div className="logo-container">
        <img src="/get-visas-logo-120w.png" alt="logo" />
      </div>
      <nav className={`nav_div ${isOpen ? "responsive_nav" : ""}`} ref={navRef}>
        <div className="nav-links">
          <Link to="/" onClick={closeNavbar}>Home</Link>
          <Link to="/UK" onClick={closeNavbar}>UK</Link>
          <div className="contact-info_nav">
            <p className="phone_nav">
              <a href="tel:+74952277712">+ 7 (495) 22 777 12 </a>
              <br />
              пн - вс 10:00 до 20:00
            </p>
          </div>
        </div>
        <button className="nav-btn nav-close-btn" onClick={toggleNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={toggleNavbar}>
        <FaBars />
      </button>
      <div className="contact-info">
        <p className="phone">
          <a href="tel:+74952277712">+ 7 (495) 22 777 12 </a>
          <br />
          пн - вс 10:00 до 20:00
        </p>
      </div>
    </header>
  );
};

export default Navbar;
