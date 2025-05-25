import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer-social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon-circle">
          <FaFacebookF />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon-circle">
          <FaTwitter />
        </a>
        <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="social-icon-circle">
          <FaPinterestP />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon-circle">
          <FaInstagram />
        </a>
      </div>
      <nav className="footer-nav">
        <ul className="footer-nav-list">
          <li className="footer-nav-item">
            <a href="/" className="footer-nav-link active">HOME</a>
          </li>
          <li className="footer-nav-item">
            <a href="/services" className="footer-nav-link">SERVICES</a>
          </li>
          <li className="footer-nav-item">
            <a href="/about-us" className="footer-nav-link">ABOUT US</a>
          </li>
          <li className="footer-nav-item">
            <a href="/blog" className="footer-nav-link">BLOG</a>
          </li>
          <li className="footer-nav-item">
            <a href="/contact-us" className="footer-nav-link">CONTACT US</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;