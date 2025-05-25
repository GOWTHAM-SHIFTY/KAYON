import React, { useState } from "react";
import "../components/ArchitectureSection.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


import homeImg from "../assets/home.jpg";
import secondImg from "../assets/second.jpg";


const images = [homeImg, secondImg, ];

const ArchitectureSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="architecture-container">
      <div className="text-section fade-in-up">
        <p>
          Since completing our first project in 2016, we have been designing
          residential properties for customers from across the globe.
        </p>
        <span className="about-link">About Us</span>
      </div>

      <div className="image-section zoom-in">
        <img
          src={images[currentImage]}
          alt="Architecture"
          className="main-image"
        />
      </div>

      <div className="arrow-controls">
        <button onClick={handlePrev}><FaArrowLeft /></button>
        <button onClick={handleNext}><FaArrowRight /></button>
      </div>
    </div>
  );
};

export default ArchitectureSection;
