import React from 'react';
import '../styles/styles.tsx';
import ProjectCard from './ProjectCard';
// Import your images
import personnelTrackerImg from '../assets/projects/personnel_tracker.png';
import weatherDashboardImg from '../assets/projects/image.png';
import vehicleBuilderImg from '../assets/projects/vehicle_builder.png';

interface Project {
    title: string;
    image: string;
    deployedUrl: string;
    githubUrl: string;
}

const projects: Project[] = [
    {
        title: 'Personnel Tracker',
        image: personnelTrackerImg,  // Use the imported image
        deployedUrl: 'https://drive.google.com/file/d/1eIb1ubckSZ5zZpBun0bo8SUO8SrGnbLv/view',
        githubUrl: 'https://github.com/jaystrand/personnel-tracker',
    },
    {
        title: 'Weather Dashboard',
        image: weatherDashboardImg,  // Use the imported image
        deployedUrl: '',
        githubUrl: 'https://github.com/jaystrand/weather_dashboard',
    },
    {
        title: 'Vehicle Builder',
        image: vehicleBuilderImg,  // Use the imported image
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