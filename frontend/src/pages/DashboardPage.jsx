import React, { useState, useEffect } from 'react';
import './DashboardPage.css';
import StatsCard from '../components/dashboard/StatsCard';
import ProjectCard from '../components/dashboard/ProjectCard';
import BarChart from '../components/charts/BarChart';

function DashboardPage() {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalProjects: 0,
    totalRevenue: 0,
    totalExpenses: 0,
    netProfit: 0
  });
  const [projects, setProjects] = useState([]);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Simular carregamento de dados
    setTimeout(() => {
      setStats({
        totalProjects: 24,
        totalRevenue: 425800,
        totalExpenses: 287300,
        netProfit: 138500
      });
      
      setProjects([
        {
          id: '1',
          name: 'Plataforma E-commerce',
          description: 'Desenvolvimento completo da plataforma de vendas online',
          status: 'Em andamento',
          budget: 120000,
          spent: 78000,
          progress: 65,
          manager: 'Ana Silva'
        },
        {
          id: '2',
          name: 'Campanha Marketing Digital',
          description: 'Redes sociais e Google Ads para lançamento de produto',
          status: 'Planejamento',
          budget: 45000,
          spent: 9000,
          progress: 20,
          manager: 'Carlos Souza'
        },
        {
          id: '3',
          name: 'Reestruturação Interna',
          description: 'Atualização de processos e treinamentos',
          status: 'Concluído',
          budget: 30000,
          spent: 28500,
          progress: 100,
          manager: 'Julia Costa'
        }
      ]);
      
      setChartData([
        { label: 'Jan', value: 80000 },
        { label: 'Fev', value: 95000 },
        { label: 'Mar', value: 65000 },
        { label: 'Abr', value: 100000 },
        { label: 'Mai', value: 85000 },
        { label: 'Jun', value: 90000 }
      ]);
      
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="dashboard-page">
        <div className="dashboard-loading">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="stat-card-skeleton">
              <div className="stat-card-skeleton-header">
                <div className="stat-card-skeleton-icon"></div>
                <div className="stat-card-skeleton-title"></div>
              </div>
              <div className="stat-card-skeleton-value"></div>
              <div className="stat-card-skeleton-change"></div>
            </div>
          ))}
        </div>
        
        <div className="charts-section">
          <div className="card chart-card">
            <div className="card-body">
              <div className="chart-loading">
                <div className="loading-bars">
                  {[1, 2, 3, 4, 5, 6].map(i => (
                    <div key={i} className="loading-bar"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="card chart-card">
            <div className="card-body">
              <div className="chart-loading">
                <div className="loading-bars">
                  {[1, 2, 3, 4, 5].map(i => (
                    <div key={i} className="loading-bar"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="recent-projects">
          <div className="projects-header">
            <h3 className="projects-title">Projetos Recentes</h3>
            <a href="#" className="view-all-link">Ver todos</a>
          </div>
          <div className="projects-table">
            <table>
              <thead>
                <tr>
                  <th>Projeto</th>
                  <th>Responsável</th>
                  <th>Status</th>
                  <th>Orçamento</th>
                  <th>Progresso</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3].map(i => (
                  <tr key={i} className="transaction-loading">
                    <td className="transaction-description">
                      <div className="description-text"></div>
                      <div className="transaction-type"></div>
                    </td>
                    <td className="transaction-category">
                      <div className="category-tag"></div>
                    </td>
                    <td className="transaction-date"></td>
                    <td className="transaction-amount"></td>
                    <td className="transaction-actions">
                      <button className="action-button edit"></button>
                      <button className="action-button delete"></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-page fade-in">
      <div className="dashboard-header">
        <div>
          <h1 className="dashboard-title">Dashboard</h1>
          <p className="dashboard-subtitle">Visão geral da saúde financeira da empresa</p>
        </div>
        <div className="dashboard-actions">
          <div className="date-filter">
            <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
              <option>Últimos 30 dias</option>
              <option>Últimos 90 dias</option>
              <option>Este ano</option>
            </select>
          </div>
          <button className="export-button">
            <i className="fas fa-download"></i>
            Exportar
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        <StatsCard 
          title="Total de Projetos" 
          value={stats.totalProjects} 
          icon={<i className="fas fa-project-diagram text-blue-600 text-xl"></i>}
          change="+12%" 
          changeType="positive"
        />
        <StatsCard 
          title="Receitas" 
          value={`R$ ${stats.totalRevenue.toLocaleString('pt-BR')}`} 
          icon={<i className="fas fa-arrow-down text-green-600 text-xl"></i>}
          change="+8%" 
          changeType="positive"
        />
        <StatsCard 
          title="Despesas" 
          value={`R$ ${stats.totalExpenses.toLocaleString('pt-BR')}`} 
          icon={<i className="fas fa-arrow-up text-red-600 text-xl"></i>}
          change="+5%" 
          changeType="negative"
        />
        <StatsCard 
          title="Lucro Líquido" 
          value={`R$ ${stats.netProfit.toLocaleString('pt-BR')}`} 
          icon={<i className="fas fa-wallet text-purple-600 text-xl"></i>}
          change="+15%" 
          changeType="positive"
        />
      </div>

      {/* Charts */}
      <div className="charts-section">
        <div className="card chart-card">
          <div className="card-header">
            <h3 className="card-title">Fluxo de Caixa</h3>
          </div>
          <div className="card-body">
            <BarChart data={chartData} height="h-64" />
          </div>
        </div>
        
        <div className="card chart-card">
          <div className="card-header">
            <h3 className="card-title">Despesas por Categoria</h3>
          </div>
          <div className="card-body">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Pessoal</span>
                  <span>R$ 125.000 (43%)</span>
                </div>
                <div className="progress-bar bg-gray-200 h-2 rounded-full">
                  <div className="progress-fill bg-purple-500 rounded-full" style={{ width: '43%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Marketing</span>
                  <span>R$ 65.000 (23%)</span>
                </div>
                <div className="progress-bar bg-gray-200 h-2 rounded-full">
                  <div className="progress-fill bg-blue-500 rounded-full" style={{ width: '23%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Infraestrutura</span>
                  <span>R$ 42.000 (15%)</span>
                </div>
                <div className="progress-bar bg-gray-200 h-2 rounded-full">
                  <div className="progress-fill bg-green-500 rounded-full" style={{ width: '15%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Operações</span>
                  <span>R$ 35.000 (12%)</span>
                </div>
                <div className="progress-bar bg-gray-200 h-2 rounded-full">
                  <div className="progress-fill bg-yellow-500 rounded-full" style={{ width: '12%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Outros</span>
                  <span>R$ 20.300 (7%)</span>
                </div>
                <div className="progress-bar bg-gray-200 h-2 rounded-full">
                  <div className="progress-fill bg-gray-500 rounded-full" style={{ width: '7%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Projects */}
      <div className="recent-projects">
        <div className="projects-header">
          <h3 className="projects-title">Projetos Recentes</h3>
          <a href="#" className="view-all-link">Ver todos</a>
        </div>
        <div className="projects-table">
          <table>
            <thead>
              <tr>
                <th>Projeto</th>
                <th>Responsável</th>
                <th>Status</th>
                <th>Orçamento</th>
                <th>Progresso</th>
              </tr>
            </thead>
            <tbody>
              {projects.map(project => (
                <tr key={project.id}>
                  <td className="project-name-cell">
                    <h4 className="project-name">{project.name}</h4>
                    <p className="project-description">{project.description}</p>
                  </td>
                  <td className="project-manager-cell">
                    <div className="project-manager">
                      <div className="manager-avatar">
                        {project.manager.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="manager-name">{project.manager}</div>
                    </div>
                  </td>
                  <td className="project-status-cell">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      project.status === 'Em andamento' ? 'bg-green-100 text-green-800' :
                      project.status === 'Planejamento' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {project.status}
                    </span>
                  </td>
                  <td className="project-budget-cell">
                    R$ {project.budget.toLocaleString('pt-BR')}
                  </td>
                  <td className="project-progress-cell">
                    <div className="progress-wrapper">
                      <div className="progress-bar bg-gray-200 h-2 rounded-full flex-1">
                        <div 
                          className="progress-fill bg-primary-600 rounded-full" 
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                      <div className="progress-text">{project.progress}%</div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;