// src/components/Navigation.tsx
import React from 'react';
import styles from '../styles/styles';

interface NavigationProps {
  currentSection: 'about' | 'portfolio' | 'contact' | 'resume';
  setCurrentSection: React.Dispatch<React.SetStateAction<'about' | 'portfolio' | 'contact' | 'resume'>>;
}

const Navigation: React.FC<NavigationProps> = ({ currentSection, setCurrentSection }) => (
  <nav style={styles.nav}>
    {['about', 'portfolio', 'contact', 'resume'].map((section) => (
      <button
        key={section}
        onClick={() => setCurrentSection(section as 'about' | 'portfolio' | 'contact' | 'resume')}
        style={{
          ...styles.navButton,
          ...(currentSection === section ? styles.navButtonActive : {}),
        }}
      >
        {section.charAt(0).toUpperCase() + section.slice(1)}
      </button>
    ))}
  </nav>
);

export default Navigation;
