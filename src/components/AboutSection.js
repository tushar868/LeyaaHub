import React from 'react';
import '../App.css';

function AboutSection() {
  return (
    <section className="section about" id="about" aria-label="about">
      <div className="container">
        <div className="about-banner img-holder" style={{ '--width': '720', '--height': '960' }}>
          <img src="./assets/images/LAUNCH.jpg" width="720" height="960" loading="lazy" alt="about banner" className="img-cover" />
        </div>
        <div className="about-content">
          <h2 className="h2 section-title">About Us</h2>
          <p className="section-text">
            At Leyaa Hub, we are more than just a service provider; we are your partners in navigating the digital landscape with creativity and innovation. Established with a commitment to excellence, Leyaa Hub is a multi-service platform offering a spectrum of digital solutions to meet the diverse needs of businesses and individuals.
          </p>
          <h3 className="h3">Our Mission</h3>
          <p className="section-text">
            At Leyaa Hub, our mission is to empower our clients with cutting-edge digital services that elevate their online presence and drive success. We believe in the transformative power of technology and design, and we are dedicated to delivering solutions that not only meet but exceed expectations.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
