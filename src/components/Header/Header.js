
import React, { useState } from 'react';
import './header.css';
import Modal from '../Modal/Modal'; 
import pdfFile from '../../assets/IdoCV.pdf';

const Header = ({ scrollToFooter, scrollToThirdMainContent, scrollToFourthMainContent, scrollToFifthMainContent }) => {
  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle modal visibility
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  
    return (
    <header className="header">
      <nav className="navigation">
        <div className="left-nav">
          <a href="#projects" className="nav-item" onClick={scrollToThirdMainContent}>Projects</a>
          <a href="#skills" className="nav-item" onClick={scrollToFourthMainContent}>Skills</a>
        </div>
        <div className="footer-signature">
        <img src="path-to-your-signature-image.png" alt="Signature" />
        <span>PRODUCT DESIGNER</span>
        </div>
        <div className="right-nav">
          <a href="#contact" className="nav-item" onClick={scrollToFooter}>Contact Me</a>
          <button className="nav-item cv-button" onClick={toggleModal}>CV</button>
        </div>
      </nav>
       {/* Modal component */}
       <Modal isOpen={isModalOpen} onClose={toggleModal}>
        {/* PDF iframe and download link */}
        <iframe src={pdfFile} title="CV" width="100%" height="500px">
        <a href={pdfFile} download="Ido_CV.pdf">Download CV</a>
        </iframe>
      </Modal>
    </header>
  );
};

export default Header;
