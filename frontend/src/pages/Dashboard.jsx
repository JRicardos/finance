import React, { useState } from 'react';
import './App.css';

// Componentos
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Projects from './pages/Projects.jsx';
import Finance from './pages/Finance.jsx';
import Reports from './pages/Reports.jsx';
import Users from './pages/Users.jsx';
import Settings from './pages/Settings.jsx';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Dados simulados
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

  const finances = [
    { id: '1', description: 'Pagamento cliente - Projeto E-commerce', type: 'receita', amount: 80000, date: '2023-06-15', category: 'vendas' },
    { id: '2', description: 'salário equipe desenvolvimento', type: 'despesa', amount: 50000, date: '2023-06-10', category: 'Pessoal' },
    { id: '3', description: 'Anúncios Google Ads', type: 'despesa', amount: 20000, date: '2023-06-05', category: 'Marketing' },
    { id: '4', description: 'Receita campanha digital', type: 'receita', amount: 50000, date: '2023-06-01', category: 'Vendas' },
    { id: '5', description: 'Servidores AWS', type: 'despesa', amount: 28000, date: '2023-05-28', category: 'Infraestrutura' }
  ];

  const stats = {
    totalProjects: projects.length,
    totalRevenue: finances.filter(f => f.type === 'receita').reduce((sum, f) => sum + f.amount, 0),
    totalExpenses: finances.filter(f => f.type === 'despesa').reduce((sum, f) => sum + f.amount, 0),
    netProfit: finances.reduce((sum, f) => f.type === 'receita' ? sum + f.amount : sum - f.amount, 0)
  };

  const renderContent = () => {
    switch(activeTab) {
      case 'dashboard': return <Dashboard stats={stats} />;
      case 'projects': return <Projects projects={projects} />;
      case 'finance': return <Finance finances={finances} />;
      case 'reports': return <Reports />;
      case 'users': return <Users />;
      case 'settings': return <Settings />;
      default: return <Dashboard stats={stats} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm border-b fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg: px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <i className="fas fa-chart-line text-primary-600 text-2xl mr-2"></i>
                <h1 className="text-2xl font-bold text-primary-600">FinanceTrack Pro</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button className="p-1 rounded-full text-gray-500 hover:text-gray-700 focus:outline-none">
                  <i className="fas fa-bell text-xl"></i>
                </button>
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-danger ring-2 ring-white"></span>
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
                    onClick={() => setShowMobileMenu(!showMobileMenus)}
                  >
                    <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold">
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
          <nav className="bg-white rounded-lg shadow-sm p-4 sticky top-24">
            <ul className="space-y-2">
              <li>
                <button 
                  data-tab="dashboard" 
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md text-left transition-colors ${
                    activeTab === 'dashboard' 
                      ? 'bg-primary-600 text-white' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => {setActiveTab('dashboard'); setShowMobileMenus(false);}}
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
                  onClick={() => {setActiveTab('projects'); setShowMobileMenus(false);}}
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
                  onClick={() => {setActiveTab('finance'); setShowMobileMenus(false);}}
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
                  onClick={() => {setActiveTab('reports'); setShowMobileMenus(false);}}
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
                  onClick={() => {setActiveTab('users'); setShowMobileMenus(false);}}
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
                  onClick={() => {setActiveTab('settings'); setShowMobileMenus(false);}}
                >
                  <i className="fas fa-cog"></i>
                  <span>Configuração</span>
                </button>
              </li>
            </ul>
          </nav>
        </aside>

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

        {/* Main Content */}
        <main className="flex-1 ml-0 md:ml-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;