import React, { useState } from 'react';
import '../components/HeroVideo.css';

const HeroSection = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="hero-container">
  <div className="hero-overlay">
    <button className="play-button" onClick={() => setShowVideo(true)}>
      ▶
    </button>
    <h5>DESIGN AGENCY</h5>
    <h1>
      Check out our show reel <br /> with the best projects
    </h1>
  </div>

  {showVideo && (
    <div className="video-modal">
      <div className="video-wrapper">
        <button className="close-button" onClick={() => setShowVideo(false)}>✖</button>
        <iframe
          src="https://youtu.be/wL8DVHuWI7Y?si=GKgvhekDMVtNTkIB"
          title="Showreel"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )}
</div>

  );
};

export default HeroSection;
