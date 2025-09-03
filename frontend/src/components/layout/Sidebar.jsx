import React from 'react';
import './Sidebar.css';

function Sidebar({ activeTab, onTabChange, showMobile }) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'fas fa-tachometer-alt' },
    { id: 'projects', label: 'Projetos', icon: 'fas fa-project-diagram' },
    { id: 'finance', label: 'Finanças', icon: 'fas fa-money-bill-wave' },
    { id: 'reports', label: 'Relatórios', icon: 'fas fa-chart-bar' },
    { id: 'users', label: 'Usuários', icon: 'fas fa-users' },
    { id: 'settings', label: 'Configurações', icon: 'fas fa-cog' }
  ];

  return (
    <aside className={`sidebar ${showMobile ? 'active' : ''}`}>
      <nav className="sidebar-nav">
        <ul className="menu-list">
          {menuItems.map((item) => (
            <li key={item.id} className="menu-item">
              <button
                className={`menu-button ${activeTab === item.id ? 'active' : ''}`}
                onClick={() => onTabChange(item.id)}
              >
                <i className={item.icon}></i>
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;