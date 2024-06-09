import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [navBackground, setNavBackground] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavBackground(true);
    } else {
      setNavBackground(false);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  return (
    <nav className={`navbar ${navBackground ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-logo">Responsive Landing Page</div>
      <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
        <li className="navbar-item"><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li className="navbar-item"><Link to="/about" onClick={toggleMenu}>About</Link></li>
        <li className="navbar-item"><Link to="/services" onClick={toggleMenu}>Services</Link></li>
        <li className="navbar-item"><Link to="/portfolio" onClick={toggleMenu}>Portfolio</Link></li>
        <li className="navbar-item"><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;