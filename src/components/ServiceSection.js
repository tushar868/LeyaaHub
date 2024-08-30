import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function ServiceSection() {
  return (
    <section className="section service" id="service" aria-label="service">
      <div className="container">
        <h2 className="h2 section-title">Services We Provide</h2>
        <p className="section-text">
          Explore the range of services <br /> Leyaa Hub has to offer
        </p>
        <ul className="grid-list-1">
          <li>
            <div className="service-card">
              <div className="card-icon" style={{ backgroundColor: '#5c7c89' }}>
                <ion-icon name="desktop"></ion-icon>
              </div>
              <h3 className="h3">
                <Link to="/services" className="card-title">Web Design & Development</Link>
              </h3>
              <p className="card-text">
                Unleash the potential of your online presence with our bespoke web design and development services. From eye-catching visuals to seamless functionality, we craft websites that leave a lasting impression.
              </p>
            </div>
          </li>
          <li>
            <div className="service-card">
              <div className="card-icon" style={{ backgroundColor: '#5c7c89' }}>
                <ion-icon name="code"></ion-icon>
              </div>
              <h3 className="h3">
                <Link to="/services" className="card-title">Mobile App Development</Link>
              </h3>
              <p className="card-text">
                Stay connected with your audience on the go. Leyaa Hub crafts mobile apps that combine functionality with an exceptional user experience, catering to the diverse needs of modern consumers.
              </p>
            </div>
          </li>
          <li>
            <div className="service-card">
              <div className="card-icon" style={{ backgroundColor: '#5c7c89' }}>
                <ion-icon name="cart"></ion-icon>
              </div>
              <h3 className="h3">
                <Link to="/services" className="card-title">E-commerce Solutions</Link>
              </h3>
              <p className="card-text">
                Take your business online with our comprehensive e-commerce solutions. We specialize in creating user-friendly, secure, and visually appealing online storefronts that enhance your customers' shopping experience.
              </p>
            </div>
          </li>
          <li>
            <div className="service-card">
              <div className="card-icon" style={{ backgroundColor: '#5c7c89' }}>
                <ion-icon name="bulb"></ion-icon>
              </div>
              <h3 className="h3">
                <Link to="/services" className="card-title">Graphic Design</Link>
              </h3>
              <p className="card-text">
                Creativity knows no bounds at Leyaa Hub. Our graphic design services cover everything from stunning logos to captivating marketing collateral, ensuring your brand stands out in a visually competitive world.
              </p>
            </div>
          </li>
          <li>
            <div className="service-card">
              <div className="card-icon" style={{ backgroundColor: '#5c7c89' }}>
                <ion-icon name="phone-portrait"></ion-icon>
              </div>
              <h3 className="h3">
                <Link to="/services" className="card-title">Digital Marketing</Link>
              </h3>
              <p className="card-text">
                Amplify your digital footprint with Leyaa Hub's digital marketing expertise. Our strategies encompass SEO, social media, and content marketing to drive traffic and boost your online presence.
              </p>
            </div>
          </li>
          <li>
            <div className="service-card">
              <div className="card-icon" style={{ backgroundColor: '#5c7c89' }}>
                <ion-icon name="build"></ion-icon>
              </div>
              <h3 className="h3">
                <Link to="/services" className="card-title">Branding and Advertisement</Link>
              </h3>
              <p className="card-text">
                Your brand is your identity, and we are here to help you build a strong one. Our branding services ensure consistency, uniqueness, and a memorable brand image across all platforms.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default ServiceSection;
