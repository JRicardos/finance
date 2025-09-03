import React, { useState, useEffect } from 'react';
import './ProjectsPage.css';
import ProjectCard from '../components/dashboard/ProjectCard';
import Button from '../components/ui/Button';

function ProjectsPage() {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    // Simular carregamento de dados
    setTimeout(() => {
      setProjects([
        {
          id: '1',
          name: 'Plataforma E-commerce',
          description: 'Desenvolvimento completo da plataforma de vendas online',
          status: 'Em andamento',
          budget: 120000,
          spent: 78000,
          progress: 65,
          manager: 'Ana Silva',
          team: ['AS', 'CS'],
          startDate: '2024-01-15',
          endDate: '2024-06-30'
        },
        {
          id: '2',
          name: 'Campanha Marketing Digital',
          description: 'Redes sociais e Google Ads para lançamento de produto',
          status: 'Planejamento',
          budget: 45000,
          spent: 9000,
          progress: 20,
          manager: 'Carlos Souza',
          team: ['CS'],
          startDate: '2024-03-01',
          endDate: '2024-05-31'
        },
        {
          id: '3',
          name: 'Reestruturação Interna',
          description: 'Atualização de processos e treinamentos',
          status: 'Concluído',
          budget: 30000,
          spent: 28500,
          progress: 100,
          manager: 'Julia Costa',
          team: ['JC'],
          startDate: '2024-02-01',
          endDate: '2024-04-30'
        },
        {
          id: '4',
          name: 'Sistema de Gestão',
          description: 'Desenvolvimento de sistema interno para gestão',
          status: 'Em andamento',
          budget: 80000,
          spent: 45000,
          progress: 56,
          manager: 'Roberto Ferreira',
          team: ['RF', 'AS'],
          startDate: '2024-03-15',
          endDate: '2024-08-30'
        }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const handleEditProject = (project) => {
    console.log('Editar projeto:', project);
  };

  const handleDeleteProject = (projectId) => {
    console.log('Excluir projeto:', projectId);
  };

  const handleViewProject = (project) => {
    console.log('Visualizar projeto:', project);
  };

  if (loading) {
    return (
      <div className="projects-page">
        <div className="projects-header">
          <div>
            <h1 className="projects-title">Gerenciamento de Projetos</h1>
            <p className="projects-subtitle">Crie, acompanhe e gerencie todos os projetos da empresa</p>
          </div>
          <Button variant="primary" icon="fas fa-plus">
            Novo Projeto
          </Button>
        </div>

        <div className="projects-filters">
          <div className="filters-header">
            <h3 className="filters-title">
              <i className="fas fa-filter"></i>
              Filtros
            </h3>
            <button className="clear-filters">Limpar filtros</button>
          </div>
          <div className="filters-content">
            <div className="filter-group">
              <label className="filter-label">Status</label>
              <select className="border border-gray-300 rounded-lg px-3 py-2">
                <option>Todos os status</option>
                <option>Em andamento</option>
                <option>Planejamento</option>
                <option>Concluído</option>
                <option>Cancelado</option>
              </select>
            </div>
            <div className="filter-group">
              <label className="filter-label">Responsável</label>
              <select className="border border-gray-300 rounded-lg px-3 py-2">
                <option>Todos os responsáveis</option>
                <option>Ana Silva</option>
                <option>Carlos Souza</option>
                <option>Julia Costa</option>
              </select>
            </div>
            <div className="filter-group">
              <label className="filter-label">Data Início</label>
              <input type="date" className="border border-gray-300 rounded-lg px-3 py-2" />
            </div>
            <div className="filter-group">
              <label className="filter-label">Data Fim</label>
              <input type="date" className="border border-gray-300 rounded-lg px-3 py-2" />
            </div>
          </div>
        </div>

        <div className="projects-loading">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="project-card-skeleton">
              <div className="project-card-skeleton-header">
                <div className="project-card-skeleton-title"></div>
                <div className="project-card-skeleton-status"></div>
              </div>
              <div className="project-card-skeleton-description"></div>
              <div className="project-card-skeleton-progress"></div>
              <div className="project-card-skeleton-finances">
                <div className="project-card-skeleton-finance-item"></div>
                <div className="project-card-skeleton-finance-item"></div>
              </div>
              <div className="project-card-skeleton-team">
                <div className="project-card-skeleton-members">
                  <div className="project-card-skeleton-member"></div>
                  <div className="project-card-skeleton-member"></div>
                </div>
                <div className="project-card-skeleton-team-count"></div>
              </div>
              <div className="project-card-skeleton-actions">
                <div className="project-card-skeleton-button"></div>
                <div className="project-card-skeleton-button"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="projects-page fade-in">
      <div className="projects-header">
        <div>
          <h1 className="projects-title">Gerenciamento de Projetos</h1>
          <p className="projects-subtitle">Crie, acompanhe e gerencie todos os projetos da empresa</p>
        </div>
        <Button variant="primary" icon="fas fa-plus">
          Novo Projeto
        </Button>
      </div>

      <div className="projects-filters">
        <div className="filters-header">
          <h3 className="filters-title">
            <i className="fas fa-filter"></i>
            Filtros
          </h3>
          <button className="clear-filters">Limpar filtros</button>
        </div>
        <div className="filters-content">
          <div className="filter-group">
            <label className="filter-label">Status</label>
            <select className="border border-gray-300 rounded-lg px-3 py-2">
              <option>Todos os status</option>
              <option>Em andamento</option>
              <option>Planejamento</option>
              <option>Concluído</option>
              <option>Cancelado</option>
            </select>
          </div>
          <div className="filter-group">
            <label className="filter-label">Responsável</label>
            <select className="border border-gray-300 rounded-lg px-3 py-2">
              <option>Todos os responsáveis</option>
              <option>Ana Silva</option>
              <option>Carlos Souza</option>
              <option>Julia Costa</option>
            </select>
          </div>
          <div className="filter-group">
            <label className="filter-label">Data Início</label>
            <input type="date" className="border border-gray-300 rounded-lg px-3 py-2" />
          </div>
          <div className="filter-group">
            <label className="filter-label">Data Fim</label>
            <input type="date" className="border border-gray-300 rounded-lg px-3 py-2" />
          </div>
        </div>
      </div>

      {projects.length === 0 ? (
        <div className="projects-empty">
          <div className="empty-icon">
            <i className="fas fa-project-diagram"></i>
          </div>
          <h3 className="empty-title">Nenhum projeto encontrado</h3>
          <p className="empty-description">Comece criando seu primeiro projeto</p>
          <Button variant="primary" icon="fas fa-plus">
            Criar Projeto
          </Button>
        </div>
      ) : (
        <div className="projects-grid">
          {projects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              onEdit={handleEditProject}
              onDelete={handleDeleteProject}
              onView={handleViewProject}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProjectsPage;