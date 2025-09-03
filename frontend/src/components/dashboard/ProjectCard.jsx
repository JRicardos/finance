import React from 'react';
import Card from '../ui/Card';
import ProgressBar from '../ui/ProgressBar';
import './ProjectCard.css';

function ProjectCard({ project, onEdit, onView }) {
  const getStatusColor = (status) => {
    switch(status) {
      case 'Em andamento': return 'bg-green-100 text-green-800';
      case 'Planejamento': return 'bg-yellow-100 text-yellow-800';
      case 'Concluído': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="project-card">
      <div className="project-header">
        <div>
          <h3 className="project-title">{project.name}</h3>
          <p className="project-description">{project.description}</p>
        </div>
        <span className={`project-status ${getStatusColor(project.status)}`}>
          {project.status}
        </span>
      </div>

      <div className="project-progress">
        <div className="progress-info">
          <span>Progresso</span>
          <span>{project.progress}%</span>
        </div>
        <ProgressBar percentage={project.progress} />
      </div>

      <div className="project-finances">
        <div className="finance-item">
          <p className="finance-label">Orçamento</p>
          <p className="finance-value">R$ {project.budget.toLocaleString('pt-BR')}</p>
        </div>
        <div className="finance-item">
          <p className="finance-label">Executado</p>
          <p className="finance-value text-danger">R$ {project.spent.toLocaleString('pt-BR')}</p>
        </div>
      </div>

      <div className="project-team">
        <div className="team-members">
          <div className="member-avatar">AS</div>
          <div className="member-avatar">CS</div>
        </div>
        <div className="team-count">2 responsáveis</div>
      </div>

      <div className="project-actions">
        <button className="action-button edit-button" onClick={() => onEdit(project)}>
          <i className="fas fa-edit mr-1"></i> Editar
        </button>
        <button className="action-button view-button" onClick={() => onView(project)}>
          <i className="fas fa-eye mr-1"></i> Visualizar
        </button>
      </div>
    </Card>
  );
}

export default ProjectCard;