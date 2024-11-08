import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Navigation from './components/Navigation';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import styles from './styles/styles';

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<'about' | 'portfolio' | 'contact' | 'resume'>('about');

  return (
    <div className="app">
      <header className="header">
        <div className="headerContent">
          <h1>Jermaine Strand</h1>
          <Navigation currentSection={currentSection} setCurrentSection={setCurrentSection} />
        </div>
      </header>

      <main className="main">
        {currentSection === 'about' && <AboutMe />}
        {currentSection === 'portfolio' && <Portfolio />}
        {currentSection === 'contact' && <Contact />}
        {currentSection === 'resume' && <Resume />}
      </main>

      <footer className="footer">
        <div className="socialLinks">
          <a href="https://github.com/jaystrand" target="_blank" rel="noopener noreferrer" className="socialLink" title="GitHub Profile">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/jermaine-strand" target="_blank" rel="noopener noreferrer" className="socialLink" title="LinkedIn Profile">
            <FaLinkedin />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
