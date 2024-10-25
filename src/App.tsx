// src/App.tsx
import React, { useState } from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
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
          <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" className="socialLink">
            <Github />
          </a>
          <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer" className="socialLink">
            <Linkedin />
          </a>
          <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer" className="socialLink">
            <Twitter />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
