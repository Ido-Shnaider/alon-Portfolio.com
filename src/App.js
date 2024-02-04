import React, { useRef } from 'react';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import SecondMainContent from './components/SecondMainContent/SecondMainContent'; 
import ThirdMainContent from './components/ThirdMainContent/ThirdMainContent';
import FourthMainContent from './components/FourthMainContent/FourthMainContent';
import FifthMainContent from './components/FifthMainContent/FifthMainContent'; // This path must be correct
import ProgressBar from './components/ProgressBar/ProgressBar';
import './App.css';

const App = () => {
  const secondMainContentRef = useRef(null);
  const thirdMainContentRef = useRef(null);
  const fourthMainContentRef = useRef(null); 
  const fifthMainContentRef = useRef(null);

  const scrollToSecondMainContent = () => {
    secondMainContentRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToThirdMainContent = () => {
    thirdMainContentRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFourthMainContent = () => {
    fourthMainContentRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFifthMainContent = () => {
    fifthMainContentRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Header
        scrollToSecondMainContent={scrollToSecondMainContent}
        scrollToThirdMainContent={scrollToThirdMainContent}
        scrollToFourthMainContent={scrollToFourthMainContent}  
        scrollToFooter={scrollToFifthMainContent}
      />
      <ProgressBar />
      <div id="who-am-i">
        <MainContent scrollToSecondMainContent={scrollToSecondMainContent} />
      </div>
      <div id="my-projects" ref={secondMainContentRef}>
        <SecondMainContent />
      </div>
      <div id="reviews-of-my-work" ref={thirdMainContentRef}>
        <ThirdMainContent />
      </div> {/* This closing tag was missing */}
      <div id="skills" ref={fourthMainContentRef}>
        <FourthMainContent />
      </div>
      <div id="meet-for-coffee" ref={fifthMainContentRef}>
        <FifthMainContent />
      </div>
    </div>
  );
}

export default App;
