import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <div className="footer container">
        <div className="footer-company">
            &copy; Accounting {new Date().getFullYear()}
        </div>
        <div className="footer-link">
            <ul className="footer-link-element">
                <li><h4>More Info</h4></li>
                <Link to="/about-us" className="footer-nav-link">About Us</Link>
                <Link to="/formContact-us" className="footer-nav-link">Contact Us</Link>
            </ul>
        </div>
    </div>
  );
}

export default Footer;