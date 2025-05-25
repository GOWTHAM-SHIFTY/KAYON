import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ title, description, imageUrl, link }) => {
  return (
    <a href={link} className="project-card" target="_blank" rel="noopener noreferrer">
      <div className="project-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="project-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </a>
  );
};

export default ProjectCard;
