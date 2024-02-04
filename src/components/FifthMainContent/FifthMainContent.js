import React from 'react';
import './FifthMainContent.css'; // Updated path to match the new CSS file name

const FifthMainContent = () => {
  return (
    <div className="main-content-section"> {/* Changed from footer to main-content-section */}
      <div className="contact-invite">
        <span className="invite-text">Meet for coffee</span>
      </div>
      <div className="main-content-header">
        <h2>WOULD YOU <span className="highlight">LIKE</span> US <span className="highlight">TO MEET</span> ?..</h2>
      </div>
      <div className="contact-info">
        <span className="contact-item">LET'S TALK</span>
        <span className="divider">|</span>
        <span className="contact-item">050-9364762</span>
        <span className="divider">|</span>
        <span className="contact-item">Alonb1996@gmail.com</span>
      </div>
      <div className="signature-section">
        <img src="path-to-your-signature-image.png" alt="Signature" />
        <span>PRODUCT DESIGNER</span>
      </div>
    </div>
  );
};

export default FifthMainContent;
