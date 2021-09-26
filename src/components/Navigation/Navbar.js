import React from "react";
import * as navbarStyles from "./Navbar.module.css";
import logoPath from "./../../assets/hero";

const Navbar = () => {
  return (
    <div>
      <div className={navbarStyles.logo}>
        <span>C</span>
        <span>o</span>
        <span>L</span>
        <span>L</span>
        <span>.</span>
      </div>
      <h1>Navbar</h1>
    </div>
  );
};

export default Navbar;
