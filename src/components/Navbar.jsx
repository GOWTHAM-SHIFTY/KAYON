import React, { useState } from "react";
import { FaShoppingBag, FaSearch, FaTh, FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  

  return (
    <nav className="navbar">
      <div className="logo">KAYON</div>

     
      <div className="nav-icons">
        <div className="cart">
          <FaShoppingBag />
          <span className="cart-count">0</span>
        </div>
        <FaSearch className="icon" />
        <div className="hamburger" onClick={toggleNavbar}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <FaTh className="icon" />
      </div>

  
     {isOpen && (
  <div className="nav-links-vertical">
    <div className="close-icon" onClick={toggleNavbar}>
      <FaTimes />
    </div>
    <ul>
      <li>HOME →</li>
      <li>PAGES →</li>
      <li>PORTFOLIO →</li>
      <li>BLOG →</li>
      <li>SHOP →</li>
    </ul>
  </div>
)}

    </nav>
  );
};

export default Navbar;
