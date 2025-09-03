import React, { useState } from 'react';
import './App.css';

// Importações de componentes
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import DashboardPage from './pages/DashboardPage';
import ProjectsPage from './pages/ProjectsPage';
import FinancePage from './pages/FinancePage';
import ReportsPage from './pages/ReportsPage';
import UsersPage from './pages/UsersPage';
import SettingsPage from './pages/SettingsPage';

function App() {
  // ✅ Deve estar assim:
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showMobileMenus, setShowMobileMenus] = useState(false); // ← Esta era o problema!

  // Dados simulados para o dashboard
  const stats = {
    totalProjects: 24,
    totalRevenue: 425800,
    totalExpenses: 287300,
    netProfit: 138500
  };

  const projects = [
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
    }
  ];

  // Função para mudar a aba ativa
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setShowMobileMenus(false);
  };

  // Renderiza o conteúdo baseado na aba ativa
  const renderContent = () => {
    switch(activeTab) {
      case 'projects':
        return <ProjectsPage />;
      case 'finance':
        return <FinancePage />;
      case 'reports':
        return <ReportsPage />;
      case 'users':
        return <UsersPage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <DashboardPage stats={stats} projects={projects} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-header bg-header.fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg: px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <div className=" flex-shrink-0 flex items-center">
                <i className="fas fa-chart-line text-primary-600 text-2xl mr-2"></i>
                <h1 className="text-2xl font-bold text-primary-600">FinanceTrack Pro</h1>
              </div>
            </div>
            
            <div className="ml-auto flex items-center space-x-4">
              <div className="relative">
                <button className="notification-button">
                  <i className="fas fa-bell text-xl"></i>
                  <span className="notification-badge"></span>
                </button>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="text-right hidden md:block">
                  <p className="text-sm font-medium text-gray-900">Empresa XYZ</p>
                  <p className="text-xs text-gray-500">Plano Profissional</p>
                </div>
                
                <div className="relative">
                  <button 
                    id="user-menu-button" 
                    className="flex items-center space-x-2 focus:outline-none"
                    onClick={() => setShowMobileMenus(!showMobileMenus)}
                  >
                    <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-content-center text-white font-bold">
                      EX
                    </div>
                    <i className="fas fa-chevron-down text-xs text-gray-500 md:hidden"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1 pt-16 max-w-7xl mx-auto w-full px-4 sm: px-6 lg: px-8 py-8">
        {/* Sidebar */}
        <aside className={`sidebar w-64 flex-shrink-0 hidden md:block ${showMobileMenus ? 'active' : ''}`}>
          <nav className="bg-nav p-4 sticky top-24">
            <ul className="space-y-2">
              <li>
                <button 
                  data-tab="dashboard" 
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md text-left transition-colors ${
                    activeTab === 'dashboard' 
                      ? 'bg-primary-600 text-white' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => handleTabChange('dashboard')}
                >
                  <i className="fas fa-tachometer-alt"></i>
                  <span>Dashboard</span>
                </button>
              </li>
              <li>
                <button 
                  data-tab="projects" 
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md text-left transition-colors ${
                    activeTab === 'projects' 
                      ? 'bg-primary-600 text-white' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => handleTabChange('projects')}
                >
                  <i className="fas fa-project-diagram"></i>
                  <span>Projetos</span>
                </button>
              </li>
              <li>
                <button 
                  data-tab="finance" 
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md text-left transition-colors ${
                    activeTab === 'finance' 
                      ? 'bg-primary-600 text-white' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => handleTabChange('finance')}
                >
                  <i className="fas fa-money-bill-wave"></i>
                  <span>Finanças</span>
                </button>
              </li>
              <li>
                <button 
                  data-tab="reports" 
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md text-left transition-colors ${
                    activeTab === 'reports' 
                      ? 'bg-primary-600 text-white' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => handleTabChange('reports')}
                >
                  <i className="fas fa-chart-bar"></i>
                  <span>Relatórios</span>
                </button>
              </li>
              <li>
                <button 
                  data-tab="users" 
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md text-left transition-colors ${
                    activeTab === 'users' 
                      ? 'bg-primary-600 text-white' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => handleTabChange('users')}
                >
                  <i className="fas fa-users"></i>
                  <span>Usuários</span>
                </button>
              </li>
              <li>
                <button 
                  data-tab="settings" 
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md text-left transition-colors ${
                    activeTab === 'settings' 
                      ? 'bg-primary-600 text-white' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => handleTabChange('settings')}
                >
                  <i className="fas fa-cog"></i>
                  <span>Configuração</span>
                </button>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 ml-0 md:ml-8">
          {renderContent()}
        </main>
      </div>

      {/* Mobile Menu Button */}
      <div className="mobile-menu-button fixed bottom-4 right-4 z-10">
        <button 
          id="mobile-menu-button" 
          className="bg-primary-600 text-white p-3 rounded-full shadow-lg"
          onClick={() => setShowMobileMenus(!showMobileMenus)}
        >
          <i className="fas fa-bars text-xl"></i>
        </button>
      </div>
    </div>
  );
}

export default App;