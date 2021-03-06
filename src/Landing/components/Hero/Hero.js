import React from "react";
import heroClasses from "./Hero.module.css";
import heroBackgroundPath from "./../../../assets/hero/curved_background.svg";
import Layout from "../../../components/Layout/Layout";

const Hero = () => {
  return (
    <div className={heroClasses.hero}>
      <Layout />
      <div className={heroClasses["hero-background"]}>
        <img src={heroBackgroundPath} alt="hero-background" />
      </div>
      <div className="section-container">Hero Section</div>
    </div>
  );
};

export default Hero;
