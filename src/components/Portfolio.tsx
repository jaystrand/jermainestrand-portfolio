// src/components/Portfolio.tsx
import React from 'react';
import '../styles/styles.tsx';
import ProjectCard from './ProjectCard';

interface Project {
    title: string;
    image: string;
    deployedUrl: string;
    githubUrl: string;
}

const projects: Project[] = [
    {
        title: 'Personnel Tracker',
        image: '/api/placeholder/300x200.png',
        deployedUrl: 'https://project1.example.com',
        githubUrl: 'https://github.com/jaystrand/personnel-tracker',
    },
    {
        title: 'Weather Dashboard',
        image: '/src/assets/projects/image.png',
        deployedUrl: 'https://project2.example.com',
        githubUrl: 'https://github.com/jaystrand/weather_dashboard',
    },
    {
        title: 'Vehicle Builder',
        image: '/api/placeholder/300x200.png',
        deployedUrl: 'https://project3.example.com',
        githubUrl: 'https://github.com/jaystrand/vehicle-builder',
    },
    {
        title: 'Readme Generator',
        image: '/api/placeholder/300x200.png',
        deployedUrl: 'https://project4.example.com',
        githubUrl: 'https://github.com/jaystrand/readme-generator',
    },
    // Add other projects
];

const Portfolio: React.FC = () => (
    <div className="portfolioGrid">
        {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
        ))}
    </div>
);

export default Portfolio;
