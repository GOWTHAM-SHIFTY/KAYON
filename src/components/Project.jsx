import React from 'react';
import './Project.css';

import FacadeImg from '../assets/facade.png';
import ModernImg from '../assets/modern.png';
import SustainableImg from '../assets/sustainable.png';

const projects = [
  {
    title: 'Elegant facades',
    image: FacadeImg,
  },
  {
    title: 'Modern spaces',
    image: ModernImg,
  },
  {
    title: 'Sustainable homes',
    image: SustainableImg,
  },
];

export const Project = () => {
  return (
    <div className="projects-wrapper">
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <img
            src={project.image}
            alt={project.title}
            className="project-img"
          />
          <div className="project-footer">
            <span className="project-title">{project.title}</span>
            <span className="project-arrow">→</span>
          </div>
        </div>
      ))}
    </div>
  );
};
