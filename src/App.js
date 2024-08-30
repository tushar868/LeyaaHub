
import './App.css';
import React, { useEffect } from 'react';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServiceSection from './components/ServiceSection';
import CTASection from './components/CTASection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';





function App() {
  
  return (
    <div className="App">
      
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServiceSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
}

export default App;
