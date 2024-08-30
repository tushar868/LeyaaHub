
import '../App.css';
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BackToTopButton from '../components/BackToTopButton';

function TermsOfServices() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header></Header>
      <main><br></br>
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
      <section className="section service" id="service" aria-label="service">
      <div className="container">
        <h2 className="h2 section-title">Web Design & Development</h2>
        <p className="section-text">
        Unleash the potential of your online presence with our bespoke web design and development services. From eye-catching visuals to seamless functionality, we craft websites that leave a lasting impression.
        </p>

        <h2 className="h2 section-title">Mobile App<br></br> Development</h2>
        <p className="section-text">
        Stay connected with your audience on the go. Leyaa Hub crafts mobile apps that combine functionality with an exceptional user experience, catering to the diverse needs of modern consumers.
        </p>

        <h2 className="h2 section-title">E-commerce<br></br> Solutions</h2>
        <p className="section-text">
        Take your business online with our comprehensive e-commerce solutions. We specialize in creating user-friendly, secure, and visually appealing online storefronts that enhance customers' shopping experience.
        </p>

        <h2 className="h2 section-title">Digital<br></br> Marketing</h2>
        <p className="section-text">
        Amplify your digital footprint with Leyaa Hub's digital marketing expertise. Our strategies encompass SEO, social media, and content marketing to drive traffic and boost your online presence.
        </p>

        <h2 className="h2 section-title">Branding and<br></br> Identity</h2>
        <p className="section-text">
        Your brand is your identity, and we are here to help you build a strong one. Our branding services ensure consistency, uniqueness, and a memorable brand image across all platforms.
        </p>

        <h2 className="h2 section-title">Quality<br></br> Assurance</h2>
        <p className="section-text">
        We pride ourselves on delivering excellence. Every project at Leyaa Hub undergoes rigorous quality checks to ensure that our clients receive not just a service, but a solution that adds tangible value to their endeavors.
        </p>

        <h2 className="h2 section-title">Collaborate <br></br>with Us</h2>
        <p className="section-text">
        Embark on a journey of digital transformation with Leyaa Hub. Whether you're a start-up, a small business, or a large enterprise, we tailor our services to meet your unique needs. Your success is our success, and we're committed to achieving it together.
        </p>

        <h2 className="h2 section-title">Get in <br></br>Touch</h2>
        <p className="section-text">
        Ready to transform your digital presence? Contact us today and let's explore the limitless possibilities that Leyaa Hub can unfold for you. Join us at the hub of creativity, innovation, and digital excellence.

        </p>
      </div>
      </section>
      </section>
      
        
      </main>
      <Footer></Footer>
      <BackToTopButton></BackToTopButton>
    </div>
  );
}

export default TermsOfServices;