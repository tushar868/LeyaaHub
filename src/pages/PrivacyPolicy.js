
import '../App.css';
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BackToTopButton from '../components/BackToTopButton';

function TermsAndCondition() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header></Header>
      <main>
      <section className="section terms" id="service" aria-label="service">
      <div className="container">
        <h2 className="h2 section-title"><br></br>Privacy Policy</h2>
        <p className="section-text1">
        <br></br>At Leyaa Hub, we understand the importance of your privacy and are committed to protecting it. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you visit our website or utilize our services.
        </p>

        <h2 className="h3 section-title1"><br></br>Information We Collect</h2>
        <p className="section-text1">
        When you visit our website or use our services, we may collect certain information from you, including :
        </p>

        <h2 className="h3 section-title1">Personal Information</h2>
        <p className="section-text1">
        This may include your name, email address, phone number, and any other information you provide to us voluntarily.
        <br></br>Usage Data : We may collect information about your interaction with our website, such as the pages visited, the duration of your visit, and any actions taken.
        How We Use Your Information
        </p>
        <p className="section-text1">
        We may use the information we collect for various purposes, including :
        <br></br>To provide and maintain our services
        <br></br>To communicate with you, including responding to inquiries and providing updates
        <br></br>To personalize your experience and improve our website
        <br></br>To analyze trends and monitor the usage of our services
        <br></br>To comply with legal obligations
        </p>

        <h2 className="h3 section-title1">Data Security</h2>
        <p className="section-text1">
        We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
        </p>

        <h2 className="h3 section-title1">Third-Party Links</h2>
        <p className="section-text1">
        Our website may contain links to third-party websites or services that are not operated by us. Please be aware that we have no control over the content and practices of these websites and cannot accept responsibility or liability for their respective privacy policies.
        </p>

        <h2 className="h3 section-title1">Your Rights</h2>
        <p className="section-text1">
        You have the right to access, update, or delete your personal information at any time. If you wish to exercise these rights or have any questions about our Privacy Policy, please contact us using the information provided below.
        </p>

        <h2 className="h3 section-title1">Changes to This Privacy Policy</h2>
        <p className="section-text1">
        We reserve the right to update or change our Privacy Policy at any time. Any changes will be effective immediately upon posting the updated Privacy Policy on this page.
        </p>

        <h2 className="h3 section-title1">Contact Us</h2>
        <p className="section-text1">
        If you have any questions or concerns about our Privacy Policy or our practices regarding your personal information, please contact us at :
        </p>

        <h2 className="h3 section-title1">Email</h2>
        <a className="section-text1" href="mailto:connect@leyaahub.in">
        connect@leyaahub.in
        </a>

        
        
        </div>
      </section>
      </main>
      <Footer></Footer>
      <BackToTopButton></BackToTopButton>
    </div>
  );
}

export default TermsAndCondition;