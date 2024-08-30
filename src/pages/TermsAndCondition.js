
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
        <h2 className="h2 section-title"><br></br>Terms and Condition</h2>
        <p className="section-text1">
        <br></br>Welcome to Leyaa Hub, your go-to destination for a spectrum of digital services, including web design, graphics, e-commerce, and more. Before engaging with our services, please take a moment to review the following Terms and Conditions. Your use of our website and the purchase of our services are subject to the rules and regulations outlined below. By accessing and utilizing our services, you agree to be bound by these terms. If you do not agree with any part of these terms, kindly refrain from using our website.
        </p>

        <h2 className="h3 section-title1"><br></br>Use of Services</h2>
        <p className="section-text1">
        Leyaa Hub grants users a limited, non-exclusive, non-transferable license to access and utilize our services for personal or business purposes. Any unauthorized or unlawful use, including but not limited to reproducing, distributing, or modifying our services, is strictly prohibited.
        </p>

        <h2 className="h3 section-title1">Intellectual Property</h2>
        <p className="section-text1">
        All content on the Leyaa Hub website, including design elements, graphics, logos, and trademarks, is the intellectual property of Leyaa Hub and is protected by copyright and other intellectual property laws. Any use, reproduction, or distribution of this content without explicit written consent is strictly prohibited.
        </p>

        <h2 className="h3 section-title1">Service Offerings</h2>
        <p className="section-text1">
        While Leyaa Hub endeavors to provide accurate and up-to-date service information, we do not warrant the completeness or accuracy of the content. Service descriptions, specifications, and prices are subject to change without notice.
        </p>

        <h2 className="h3 section-title1">Ordering and Payment</h2>
        <p className="section-text1">
        To order our services, please follow the designated process on our website. Leyaa Hub reserves the right to accept or reject any order at our discretion. Payment terms and options will be communicated during the order process.
        </p>

        <h2 className="h3 section-title1"> Client Collaboration</h2>
        <p className="section-text1">
        For web design, graphics, and other customizable services, Leyaa Hub may require collaboration with the client. Timely provision of necessary information and feedback is essential for the successful execution of the services.
        </p>

        <h2 className="h3 section-title1">Confidentiality</h2>
        <p className="section-text1">
        Leyaa Hub respects the confidentiality of client information. Any information provided during service will be treated with the utmost confidentiality and used only for the intended purposes.
        </p>

        <h2 className="h3 section-title1">Termination of Services</h2>
        <p className="section-text1">
        Leyaa Hub reserves the right to terminate or suspend services at any time for any reason, including but not limited to non-compliance with these terms, outstanding payments, or other breaches of agreement.
        </p>

        <h2 className="h3 section-title1">Changes to Terms and Conditions</h2>
        <p className="section-text1">
        We may update or modify these Terms and Conditions. Changes will be effective immediately upon posting on our website. Continued use of our services after changes constitute acceptance.
        </p>

        <h2 className="h3 section-title1">Limitation of Liability</h2>
        <p className="section-text1">
        Leyaa Hub shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from the use or inability to use our services.
        </p>

        <h2 className="h3 section-title1">Governing Law and Jurisdiction</h2>
        <p className="section-text1">
        These Terms and Conditions are governed by the laws of Maharashtra. Any disputes shall be subject to the exclusive jurisdiction of the courts in Maharashtra.
        </p>

        <p className="section-text1">
        <br></br>By proceeding with our services, you acknowledge that you have read, understood, and agreed to these Terms and Conditions in their entirety. If you have any questions or concerns, please contact our customer support team for assistance.
        </p>
        
        </div>
      </section>
      </main>
      <Footer></Footer>
      <BackToTopButton></BackToTopButton>
    </div>
  );
}

export default TermsAndCondition;