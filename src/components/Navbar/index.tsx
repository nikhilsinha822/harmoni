import { useState } from 'react';
import { FaCartShopping } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import './Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <a href="/">Harmoni</a>
      </div>

      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <a href="/" className="nav-link">Home Page</a>
        <a href="/categories" className="nav-link">Categories</a>
        <a href="/contact" className="nav-link">Contact Us</a>
        <a href="/more" className="nav-link">More Options</a>
      </div>

      {/* Search and cart section */}
      <div className="nav-right">
        <div className="search-box desktop-search">
          <input type="text" placeholder="What are you looking for?" />
          <button className="search-button"><CiSearch /></button>
        </div>
        <div className="nav-icons">
          <a href="/cart" className="cart-icon"><FaCartShopping /></a>
          <a href="/profile" className="profile-icon"><IoPerson /></a>
          <button className="nav-toggle" onClick={toggleMenu}>
            <GiHamburgerMenu />
          </button>
        </div>
      </div>

      {/* Mobile search bar */}
      <div className="mobile-search active">
        <div className="mobile-search-container">
          <CiSearch className="mobile-search-icon" />
          <input type="text" placeholder="What are you looking for?" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;