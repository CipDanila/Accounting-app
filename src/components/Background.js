import React from 'react';
import './Background.css';
import { NavLink } from "react-router-dom";

function Background() {
  return (
    <div className="background-container">
        <div className="background-content">
          <h2 className="background-heading">Book a consultation</h2>
          <p className="background-paragraph">We Are the Best Accounting Agency</p>
          <NavLink to="/">
            <button className="background-button">Free consultation</button>
          </NavLink>
        </div>
    </div>
  );
}

export default Background;