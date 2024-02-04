// Custom cursor component that follows the mouse
import React, { useEffect, useState } from 'react';
import './customCursor.css';


const CustomCursor = () => {
  // State for cursor position
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Update cursor position on mouse move
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  // Inline styles for cursor position
  const cursorStyles = {
    position: 'fixed',
    left: `${position.x}px`,
    top: `${position.y}px`,
    // Additional styles ...
  };

  return <div className="custom-cursor" style={cursorStyles}></div>;
};

export default CustomCursor;
