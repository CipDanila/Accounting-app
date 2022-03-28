import React from 'react';
import './Header.css';
import { NavLink } from "react-router-dom";

function Header() {
    return (
      <div className="header clearfix">
        <div className="header container">
          <div className="header-logo">
            <NavLink to="/" className="header-logo-link">Accounting</NavLink>
          </div>
          <nav className="header-nav">
              <NavLink exact to="/" className="header-nav-link" activeClassName="selected">Home</NavLink>
              <NavLink exact to="/add-consultation" className="header-nav-link" activeClassName="selected">Book Consultation</NavLink>
              <NavLink exact to="/consultation-list" className="header-nav-link" activeClassName="selected">View Consultations</NavLink>
          </nav>
          <form className="header-form">
            <input type="text" className="header-form-element" placeholder="Search" />
            <NavLink to="/">
              <button className="header-form-button">Go</button>
            </NavLink>
          </form>
        </div>

      </div>
    );
  }
  
  export default Header;
  