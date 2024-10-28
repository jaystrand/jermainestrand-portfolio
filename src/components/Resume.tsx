import React from 'react';
import '../styles/styles.tsx';


const Resume: React.FC = () => (
    <div className="resumeSection">
        <div className="downloadResume">
        <a href="/resume.docx" download className="button">
    My Resume
</a>
        </div>
        <div>
            <h3>Technical Proficiencies</h3>
            <ul className="proficienciesList">
                <li>Frontend Development: React, JavaScript, HTML5, CSS3</li>
                <li>Framework/Libraries: React</li>
                <li>Backend Development: Node.js</li>
                <li>Database Design: PostgreSQL, SQL</li>
                <li>Version Control & Collaboration: Git, GitHub, GitLab</li>
            </ul>
        </div>
    </div>
);

export default Resume;
