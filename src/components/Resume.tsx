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
            <h3>Front-End Technical Proficiencies</h3>
            <ul className="proficienciesList">
                <li><strong>Languages</strong>: JavaScript, TypeScript, HTML5, CSS3</li>
                <li><strong>Frameworks/Libraries</strong>: React</li>
                <li><strong>Version Control & Collaboration</strong>: Git, GitHub, GitLab</li>
            </ul>
            
            <h3>Back-End Technical Proficiencies</h3>
            <ul className="proficienciesList">
                <li><strong>Languages</strong>: TypeScript (Node.js)</li>
                <li><strong>Database Design</strong>: PostgreSQL, SQL</li>
            </ul>
        </div>
    </div>
);

export default Resume;
