
import '../App.css';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BackToTopButton from '../components/BackToTopButton';

function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header></Header>
      <main>
      <section className="section contact" id="contact" aria-label="contact">
      <div className="container">
        <h2 className="h2 section-title"><br></br>Get in Touch</h2>
        <p className="section-text">
          Ready to transform your digital presence? Contact us today and let's explore the limitless possibilities that Leyaa Hub can unfold for you. Join us at the hub of creativity, innovation, and digital excellence.
        </p>
        <form action="" className="contact-form">
          <div className="input-wrapper">
            <input type="text" name="name" aria-label="name" placeholder="Your name*" required className="input-field" />
            <input type="email" name="email_address" aria-label="email" placeholder="Email address*" required className="input-field" />
          </div>
          <div className="input-wrapper">
            <input type="text" name="subject" aria-label="subject" placeholder="Subject" className="input-field" />
            <input type="number" name="phone" aria-label="phone" placeholder="Phone number*" required className="input-field" />
          </div>
          <textarea name="message" aria-label="message" placeholder="Your message...*" required className="input-field"></textarea>
          <div className="checkbox-wrapper">
            <input type="checkbox" name="terms_and_policy" id="terms" required className="checkbox" />
            <label htmlFor="terms" className="label">
              Accept <Link to="/termsandcondition" className="label-link">Terms and Condition</Link> and <Link to="/privacypolicy" className="label-link">Privacy Policy</Link>
            </label>
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
        <ul className="contact-list">
          <li className="contact-item">
            <div className="contact-card">
              <div className="card-icon">
                <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>
              </div>
              <div className="card-content">
                <h3 className="h3 card-title">Mail Here</h3>
                <a href="mailto:connect@leyaahub.in" className="card-link">connect@leyaahub.in</a>
              </div>
            </div>
          </li>
          <li className="contact-item">
            <div className="contact-card">
              <div className="card-icon">
                <ion-icon name="map-outline" aria-hidden="true"></ion-icon>
              </div>
              <div className="card-content">
                <h3 className="h3 card-title">Follow Us</h3>
                <a href="https://www.facebook.com/people/l%C3%A9yaa-Hub/61555345695961/?mibextid=ZbWKwL" className="fa fa-facebook"></a>
                <a href="https://www.instagram.com/leyaa.hub/?igsh=MWlra2dxanM0ZXZ3Yg%3D%3D" className="fa fa-instagram"></a>
                <a href="https://www.linkedin.com/company/l%C3%A9yaa-hub/" className="fa fa-linkedin"></a>
              </div>
            </div>
          </li>
          <li className="contact-item">
            <div className="contact-card">
              <div className="card-icon">
                <ion-icon name="headset-outline" aria-hidden="true"></ion-icon>
              </div>
              <div className="card-content">
                <h3 className="h3 card-title">Call Here</h3>
                <a href="tel:+91 9699102791" className="card-link">+91 9699102791</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
      </main>
      <Footer></Footer>
      <BackToTopButton></BackToTopButton>
    </div>
  );
}

export default ContactUs;