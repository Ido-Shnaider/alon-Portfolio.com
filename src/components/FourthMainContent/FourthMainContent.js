import React from 'react';
import './FourthMainContent.css'; 
const FourthMainContent = () => {
  return (
    <main className="main-content fourth-main-content">
      <div className="content-above">
        <h4 className="content-title">Recommendations</h4>
        <h1 className="content-subtitle">THEY <span className="fixed-color">SAY</span> <span className="fixed-color">ABOUT</span> ME</h1>
      </div>
      <div className="recommendation-cards">
        {/* Recommendation Card 1 */}
        <div className="recommendation-card">
          <div className="person-info">
            <h3 className="person-name">John Doe</h3>
            <p className="person-position">Software Engineer</p>
          </div>
          <div className="stars">
            {/* Display stars vertically */}
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
          </div>
          <div className="recommendation-text">
            <p className="recommendation-sentence">Amazing</p>
            <p className="recommendation-sentence">Intelligent</p>
            <p className="recommendation-sentence">Kind</p>
            <p className="recommendation-review">
              John is an outstanding software engineer with excellent problem-solving skills. He is a valuable asset to any team.
            </p>
          </div>
        </div>

        {/* Recommendation Card 2 */}
        <div className="recommendation-card">
          <div className="person-info">
            <h3 className="person-name">Jane Smith</h3>
            <p className="person-position">Product Designer</p>
          </div>
          <div className="stars">
            {/* Display stars vertically */}
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
          </div>
          <div className="recommendation-text">
            <p className="recommendation-sentence">Creative</p>
            <p className="recommendation-sentence">Collaborative</p>
            <p className="recommendation-sentence">Detail-Oriented</p>
            <p className="recommendation-review">
              Jane consistently produces creative and thoughtful design work. She is a great collaborator and pays attention to every detail.
            </p>
          </div>
        </div>

        {/* Recommendation Card 3 */}
        <div className="recommendation-card">
          <div className="person-info">
            <h3 className="person-name">Sarah Johnson</h3>
            <p className="person-position">Marketing Manager</p>
          </div>
          <div className="stars">
            {/* Display stars vertically */}
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
          </div>
          <div className="recommendation-text">
            <p className="recommendation-sentence">Strategic</p>
            <p className="recommendation-sentence">Results-Driven</p>
            <p className="recommendation-sentence">Team Player</p>
            <p className="recommendation-review">
              Sarah has a strategic mindset and consistently delivers results. She is a valuable team player who brings out the best in her colleagues.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default FourthMainContent;
