import React from 'react';
import '../styles/styles.tsx';
import ProjectCard from './ProjectCard';
// Import your images
import personnelTrackerImg from '../assets/projects/personnel_tracker.png';
import codeProImg from '../assets/projects/image-1.png';
import vehicleBuilderImg from '../assets/projects/vehicle_builder.png';
import candidateSearchImg from '../assets/projects/candidate_search.jpg';
import kanbanBoardImg from '../assets/projects/kanban_board.jpg';

interface Project {
    title: string;
    image: string;
    deployedUrl: string;
    githubUrl: string;
}

const projects: Project[] = [
    {
        title: 'Personnel Tracker',
        image: personnelTrackerImg,  
        deployedUrl: 'https://drive.google.com/file/d/1eIb1ubckSZ5zZpBun0bo8SUO8SrGnbLv/view',
        githubUrl: 'https://github.com/jaystrand/personnel-tracker',
    },
    {
        title: 'Code Pro',
        image: codeProImg,  
        deployedUrl: 'https://drive.google.com/uc?id=1bv5M5TbI5RXYVA19MNblm-v3e2-ZM6dz&export=download',
        githubUrl: 'https://github.com/jaystrand/code-pro',
    },
    {
        title: 'Vehicle Builder',
        image: vehicleBuilderImg,  
        deployedUrl: 'https://drive.google.com/file/d/1ZyGVwx5sDHte0k7S9uHzffpc7wtDApka/view',
        githubUrl: 'https://github.com/jaystrand/vehicle-builder',
    },
    {
        title: 'Candidate Search',
        image: candidateSearchImg,  
        deployedUrl: 'https://candidate-search-qt7g.onrender.com',
        githubUrl: 'https://github.com/jaystrand/candidate_search',
    },
    {
        title: 'Kaban Krazy Board',
        image: kanbanBoardImg,  
        deployedUrl: 'https://kanban-board-p5di.onrender.com',
        githubUrl: 'https://github.com/jaystrand/kanban_board',
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