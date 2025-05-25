import React from "react";
import "./AboutSection.css";
import buildingImg from "../assets/abt.jpg"; 

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="image-container">
        <img src={buildingImg} alt="Architecture" className="about-image" />
      </div>
      <div className="content-container">
        <p className="section-tag">ABOUT OUR COMPANY</p>
        <h2 className="section-title">Leaders in sustainable architectural practices</h2>
        <p className="section-desc">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam.
        </p>
        <button className="about-button">About Us</button>
      </div>
    </section>
  );
};

export default AboutSection;
