import React from 'react';
import "./Footer.css"
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p>&copy; Get Visas 2012-{new Date().getFullYear()} </p>
        <nav className="footer__nav">
          <ul>
          <Link to="/">Home</Link>
          <Link to="/UK">UK</Link>
          <a className = "footer_phone"href="tel:+74952277712">+ 7 (495) 22 777 12 </a>    
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
