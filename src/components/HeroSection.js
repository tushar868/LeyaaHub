import React from 'react';
import '../App.css';

function HeroSection() {
  return (
    <section className="section hero" id="home" aria-label="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="h1 hero-title">Your Hub for Comprehensive Digital Solutions!</h1>
        </div>
        <figure className="hero-banner">
          <img src="./assets/images/Leyaa.png" width="720" height="673" alt="hero banner" className="w-100" />
        </figure>
      </div>
    </section>
  );
}

export default HeroSection;
