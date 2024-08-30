import React from 'react';
import '../App.css';

function BackToTopButton() {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <a href="#top" aria-label="back to top" data-back-top-btn className="back-top-btn" onClick={handleBackToTop}>
      <ion-icon name="chevron-up" aria-hidden="true"></ion-icon>
    </a>
  );
}

export default BackToTopButton;
