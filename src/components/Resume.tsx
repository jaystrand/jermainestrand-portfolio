// src/components/Resume.tsx
import React from 'react';
import '../styles/styles.tsx';

const Resume: React.FC = () => (
  <div className="resumeSection">
    <div className="downloadResume">
      <a href="/resume.pdf" download className="button">
        Download Resume
      </a>
    </div>
    <div>
      <h3>Technical Proficiencies</h3>
      <ul className="proficienciesList">
        <li>Front-end: React, JavaScript, HTML5, CSS3</li>
        {/* Add more proficiencies */}
      </ul>
    </div>
  </div>
);

export default Resume;
