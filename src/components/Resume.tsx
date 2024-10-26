// src/components/Resume.tsx
import React from 'react';
import '../styles/styles.tsx';

const Resume: React.FC = () => (
    <div className="resumeSection">
        <div className="downloadResume">
            <a href="src/assets/projects/Jermaine Strand Resume_Software Engineering.docx" download className="button">
                My Resume
            </a>
        </div>
        <div>
            <h3>Technical Proficiencies</h3>
            <ul className="proficienciesList">
                <li>Frontend Development: React, JavaScript, HTML5, CSS3</li>
                <li>Backend Development: Node.js, AWS Cloud Services</li>
                <li>Database Design: PostgreSQL, SQL</li>
                <li>Version Control & Collaboration: GitHub</li>
            </ul>
        </div>
    </div>
);

export default Resume;
