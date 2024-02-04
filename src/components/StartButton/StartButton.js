import React from 'react';
import './StartButton.css';

const StartButton = () => {
  const handleClick = () => {
    // Handle the click event
    console.log('Button clicked!');
  };

  return (
    <button className="start-button" onClick={handleClick}>
      START
    </button>
  );
}

export default StartButton;
