import React from 'react';
import './NewsLetterSubscription.css';
import { FaPaperPlane, FaInstagram } from 'react-icons/fa';


import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img6.jpg';

const NewsLetterSubscription = () => {
  const bannerImages = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
  ];

  return (
    <div className="full-component-container">
      <section className="image-banner-section">
        <div className="image-grid">
          {bannerImages.map((image, index) => (
            <div
              key={index}
              className="banner-image-item"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          ))}
        </div>
        <div className="instagram-round-icon-container">
          <FaInstagram className="instagram-main-icon" />
        </div>
      </section>

      <section className="newsletter-section">
        <div className="decorative-icon"></div>
        <h2 className="newsletter-title">Get the best blog stories</h2>
        <p className="newsletter-subtitle">into your inbox!</p>
        <form className="newsletter-form">
          <div className="input-group">
            <input type="email" placeholder="Enter Your Email Address" className="email-input" />
            <button type="submit" className="subscribe-button">
              <FaPaperPlane className="plane-icon" /> SUBSCRIBE
            </button>
          </div>
          <label className="privacy-checkbox">
            <input type="checkbox" /> I agree to the <a href="/privacy-policy" className="privacy-link">Privacy Policy</a>.
          </label>
        </form>
      </section>
    </div>
  );
};

export default NewsLetterSubscription;