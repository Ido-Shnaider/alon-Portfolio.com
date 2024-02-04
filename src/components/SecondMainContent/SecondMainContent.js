import React, { useState } from 'react';
import './SecondMainContent.css';

const SecondMainContent = ({ startAnimation }) => {
  const [animateText] = useState(false);



  return (
    <main className="main-content second-main-content">
    <div className={`cta-container ${animateText ? 'animate-text' : ''}`}>
    <h4 className={`cta-text ${animateText ? 'animate-text' : ''}`}>
      Hello,
      Nice To Meet You <br></br>
      I am Alon Barai, a <span className="second-cta-start" style={{ fontSize: '2.5rem' }}>UX/UI Designer</span><br></br>
      <span className={`cta-hover ${animateText ? 'appear-animation' : ''}`} style={{ color: '#FFA500' }}>
        Keep scrolling</span> to see my project's...
    </h4>
  </div>
</main>
  );
}

export default SecondMainContent;
