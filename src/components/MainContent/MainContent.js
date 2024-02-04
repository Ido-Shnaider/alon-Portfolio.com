import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrosshairs } from '@fortawesome/free-solid-svg-icons';
import './MainContent.css';

const MainContent = ({ scrollToSecondMainContent }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="main-content">
      {/* Icon that follows the mouse */}
      <div
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          position: 'fixed',
          pointerEvents: 'none',
          transform: 'translate(-50%, -50%)', // Centers the icon on the cursor
          animation: 'levitate 0.5s ease-in-out infinite alternate',
          zIndex: 1000 // Ensures the icon is above other content
        }}
      >
        <FontAwesomeIcon icon={faCrosshairs} style={{ fontSize: '40px' }} />
      </div>

      {/* Existing content */}
      <div className="pre-cta-text">You won't be sorry</div>
      <div className="cta-text">CLICK <span className="hover-effect">START</span></div>
      <div className="cta-text"><span className="hover-effect">TO BEGIN</span> THE EXPERIENCE</div>
      <div className="cta-container">
        <button className="cta-button" onClick={scrollToSecondMainContent}>START</button>
      </div>
    </div>
  );
}

export default MainContent;
