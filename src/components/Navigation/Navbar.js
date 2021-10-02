import React from "react";
import * as navbarStyles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div>
      <div className={navbarStyles.logo}>
        <span className="primary">C</span>
        <span className="primary">o</span>
        <span className="dark-primary">L</span>
        <span className="dark-primary">L</span>
        <span className="yellow">.</span>
      </div>
      <div className={navbarStyles.links}>
        <div className={navbarStyles.middleLink}></div>
      </div>
      <h1>Navbar</h1>
    </div>
  );
};

export default Navbar;
