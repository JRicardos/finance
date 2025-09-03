import React, { useState } from 'react';
import './Header.css';

function Header({ companyName, plan }) {
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <div className="logo">
            <i className="fas fa-chart-line text-primary-600 text-2xl mr-2"></i>
            <h1 className="text-2xl font-bold text-primary-600">FinanceTrack Pro</h1>
          </div>
        </div>
        
        <div className="user-section">
          <div className="notifications">
            <button className="notification-button">
              <i className="fas fa-bell text-xl"></i>
              <span className="notification-badge"></span>
            </button>
          </div>
          
          <div className="user-info">
            <div className="company-info">
              <p className="company-name">{companyName}</p>
              <p className="plan-info">{plan}</p>
            </div>
            
            <div className="user-avatar">
              <button 
                className="avatar-button"
                onClick={() => setShowUserMenu(!showUserMenu)}
              >
                <div className="avatar">EX</div>
                <i className="fas fa-chevron-down text-xs text-gray-500 md:hidden"></i>
              </button>
              
              {showUserMenu && (
                <div className="user-dropdown">
                  <button className="dropdown-item">Meu Perfil</button>
                  <button className="dropdown-item">Configurações</button>
                  <button className="dropdown-item logout">Sair</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;