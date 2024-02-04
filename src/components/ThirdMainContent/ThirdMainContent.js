import React from 'react';
import './ThirdMainContent.css'; 

const ThirdMainContent = () => {
  return (
    <main className="main-content third-main-content">
      <div className="cta-container">
        <h6 className="pre-cta-text">My project's</h6>
        <h1 className="cta-text">
          Everything <span className="fixed-color">ends</span> and <span className="fixed-color">begins</span> with
        </h1>
        <h1 className="cta-text">
          an <span className="fixed-color">experience</span>
        </h1>
      </div>

      <div className="video-box-container">
        {/* You can map over an array if you have multiple videos, for demonstration I'm hardcoding three */}
        <div className="video-box">
          <div className="play-button"></div>
          <p className="video-box-caption">Project 1</p>
        </div>
        <div className="video-box">
          <div className="play-button"></div>
          <p className="video-box-caption">Project 2</p>
        </div>
        <div className="video-box">
          <div className="play-button"></div>
          <p className="video-box-caption">Project 3</p>
        </div>
      </div>
      
    </main>
  );
}

export default ThirdMainContent;