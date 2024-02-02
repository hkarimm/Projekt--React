import React from 'react';

const Project = ({ project }) => {
  return (
    <article key={project.id} className = "project-item">
      <a href={project.html_url}>
        <h3>{project.name}</h3>
      </a>
      <p>{project.description}</p>
    </article>
  );
};

export default Project;
