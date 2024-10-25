// src/components/ProjectCard.tsx
import React from 'react';
import styles from '../styles/styles';

interface Project {
  title: string;
  image: string;
  deployedUrl: string;
  githubUrl: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <div style={styles.projectCard}>
    <img src={project.image} alt={project.title} style={styles.projectImage} />
    <div style={styles.projectInfo}>
      <h3>{project.title}</h3>
      <div style={styles.projectLinks}>
        <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer" style={styles.projectLink}>
          Live Demo
        </a>
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={styles.projectLink}>
          GitHub
        </a>
      </div>
    </div>
  </div>
);

export default ProjectCard;
