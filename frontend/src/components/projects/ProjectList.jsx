import React from 'react';
import ProjectItem from './ProjectItem';
import './ProjectList.css';

function ProjectList({ projects, onEdit, onDelete, onView }) {
  if (projects.length === 0) {
    return (
      <div className="empty-state">
        <i className="fas fa-project-diagram empty-icon"></i>
        <h3>Nenhum projeto encontrado</h3>
        <p>Comece criando seu primeiro projeto</p>
      </div>
    );
  }

  return (
    <div className="project-list">
      {projects.map(project => (
        <ProjectItem
          key={project.id}
          project={project}
          onEdit={onEdit}
          onDelete={onDelete}
          onView={onView}
        />
      ))}
    </div>
  );
}

export default ProjectList;