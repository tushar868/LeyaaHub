
import '../App.css';
import { Link } from 'react-router-dom';

import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isNavbarActive, setIsNavbarActive] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarActive(!isNavbarActive);
  };

  const closeNavbar = () => {
    setIsNavbarActive(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("[data-header]");
      const backTopBtn = document.querySelector("[data-back-top-btn]");
      if (window.scrollY > 100) {
        header.classList.add("active");
        backTopBtn.classList.add("active");
      } else {
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isNavbarActive ? 'active' : ''}`} data-header>
      <div className="container">

        <a href="" className="logo">léyaa.Hub</a>

        <nav className={`navbar container ${isNavbarActive ? 'active' : ''}`} data-navbar>
          <ul className="navbar-list">

            <li>
              <Link to="/" className="navbar-link" data-nav-link onClick={closeNavbar}>Home</Link>
              
            </li>

            <li>
              <Link to="/aboutus" className="navbar-link" data-nav-link onClick={closeNavbar}>About Us</Link>
             
            </li>

            <li>
              <Link to="/services" className="navbar-link" data-nav-link onClick={closeNavbar}>Services</Link>
              
            </li>

            <li>
              <Link to="/contact" className="navbar-link" data-nav-link onClick={closeNavbar}>Contact Us</Link>
              
            </li>

            <li>
              <a href="./assets/images/Leyaa.Hub PPT.pdf" className="btn btn-primary">Know More</a>
            </li>

          </ul>
        </nav>

        <button className={`nav-toggle-btn ${isNavbarActive ? 'active' : ''}`} aria-label="Toggle menu" data-nav-toggler onClick={toggleNavbar}>
          <ion-icon name={isNavbarActive ? "close-outline" : "menu-outline"}></ion-icon>
        </button>

      </div>
    </header>
  );
};

export default Header;
