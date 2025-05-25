import React from "react";
import "../components/HeaderSection.css";
import logo from "../assets/logo.png"; 

const HeaderSection = () => {
  return (
    <header className="header-section">
      <h1 className="studio-title">Architecture Studio</h1>
      <img src={logo} alt="Logo" className="studio-logo" />
    </header>
  );
};

export default HeaderSection;
