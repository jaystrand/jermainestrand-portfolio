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
        image: 'src/assets/projects/personnel_tracker.png',
        deployedUrl: 'https://drive.google.com/file/d/1eIb1ubckSZ5zZpBun0bo8SUO8SrGnbLv/view',
        githubUrl: 'https://github.com/jaystrand/personnel-tracker',
    },
    {
        title: 'Weather Dashboard',
        image: '/src/assets/projects/image.png',
        deployedUrl: '',
        githubUrl: 'https://github.com/jaystrand/weather_dashboard',
    },
    {
        title: 'Vehicle Builder',
        image: 'src/assets/projects/vehicle_builder.png',
        deployedUrl: 'https://drive.google.com/file/d/1ZyGVwx5sDHte0k7S9uHzffpc7wtDApka/view',
        githubUrl: 'https://github.com/jaystrand/vehicle-builder',
    },
    {
        title: 'Readme Generator',
        image: '/api/placeholder/300x200.png',
        deployedUrl: '',
        githubUrl: 'https://github.com/jaystrand/readme-generator',
    },
   
];

const Portfolio: React.FC = () => (
    <div className="portfolioGrid">
        {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
        ))}
    </div>
);

export default Portfolio;
