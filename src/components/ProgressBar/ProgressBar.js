// ProgressBar.js
import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ activeSection }) => {
    return (
        <div className="metro-progress-bar-container">
            <div className="metro-progress-line"></div>
            <div className={`metro-progress-indicator ${activeSection === 'who-am-i' ? 'active' : ''}`} style={{ top: '0%' }}>
                <span className="metro-progress-text">Who am I?</span>
            </div>
            <div className={`metro-progress-indicator ${activeSection === 'my-projects' ? 'active' : ''}`} style={{ top: '25%' }}>
                <span className="metro-progress-text">My projects</span>
            </div>
            <div className={`metro-progress-indicator ${activeSection === 'reviews' ? 'active' : ''}`} style={{ top: '50%' }}>
                <span className="metro-progress-text">Reviews of my work</span>
            </div>
            <div className={`metro-progress-indicator ${activeSection === 'meet' ? 'active' : ''}`} style={{ top: '75%' }}>
                <span className="metro-progress-text">Meet for coffee?</span>
            </div>
        </div>
    );
};

export default ProgressBar;
