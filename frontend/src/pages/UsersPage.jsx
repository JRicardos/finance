import React, { useState, useEffect } from 'react';
import './UsersPage.css';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

function UsersPage() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [showAddUser, setShowAddUser] = useState(false);

  useEffect(() => {
    // Simular carregamento de dados
    setTimeout(() => {
      setUsers([
        {
          id: '1',
          name: 'Ana Silva',
          email: 'ana@empresa.com',
          role: 'Gestor de Projetos',
          status: 'Ativo',
          lastLogin: '2024-06-15 14:30',
          avatar: 'AS'
        },
        {
          id: '2',
          name: 'Carlos Souza',
          email: 'carlos@empresa.com',
          role: 'Financeiro',
          status: 'Ativo',
          lastLogin: '2024-06-15 10:15',
          avatar: 'CS'
        },
        {
          id: '3',
          name: 'Julia Costa',
          email: 'julia@empresa.com',
          role: 'Administrador',
          status: 'Ativo',
          lastLogin: '2024-06-14 16:45',
          avatar: 'JC'
        },
        {
          id: '4',
          name: 'Roberto Ferreira',
          email: 'roberto@empresa.com',
          role: 'Visualizador',
          status: 'Ativo',
          lastLogin: '2024-06-14 09:30',
          avatar: 'RF'
        }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const handleAddUser = () => {
    setShowAddUser(true);
  };

  const handleEditUser = (user) => {
    console.log('Editar usuário:', user);
  };

  const handleDeleteUser = (userId) => {
    console.log('Excluir usuário:', userId);
  };

  if (loading) {
    return (
      <div className="users-page">
        <div className="users-header">
          <div>
            <h1 className="users-title">Gerenciamento de Usuários</h1>
            <p className="users-subtitle">Controle de acesso e permissões dos usuários</p>
          </div>
          <Button variant="primary" icon="fas fa-plus">
            Novo Usuário
          </Button>
        </div>

        <div className="users-filters">
          <div className="filters-header">
            <h3 className="filters-title">
              <i className="fas fa-filter"></i>
              Filtros
            </h3>
            <button className="clear-filters">Limpar filtros</button>
          </div>
          <div className="filters-content">
            <div className="filter-group">
              <label className="filter-label">Cargo</label>
              <select className="border border-gray-300 rounded-lg px-3 py-2">
                <option>Todos os cargos</option>
                <option>Administrador</option>
                <option>Financeiro</option>
                <option>Gestor de Projetos</option>
                <option>Visualizador</option>
              </select>
            </div>
            <div className="filter-group">
              <label className="filter-label">Status</label>
              <select className="border border-gray-300 rounded-lg px-3 py-2">
                <option>Status</option>
                <option>Ativo</option>
                <option>Inativo</option>
              </select>
            </div>
            <div className="filter-group">
              <label className="filter-label">Permissão</label>
              <select className="border border-gray-300 rounded-lg px-3 py-2">
                <option>Todas as permissões</option>
                <option>Leitura</option>
                <option>Escrita</option>
                <option>Admin</option>
              </select>
            </div>
          </div>
        </div>

        <div className="users-container">
          <div className="users-header">
            <h3 className="users-title">Lista de Usuários</h3>
            <div className="users-count">0 usuários encontrados</div>
          </div>
          <div className="users-table">
            <table>
              <thead>
                <tr>
                  <th>Usuário</th>
                  <th>Cargo</th>
                  <th>Status</th>
                  <th>Último acesso</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4].map(i => (
                  <tr key={i} className="user-loading">
                    <td className="user-info">
                      <div className="user-avatar"></div>
                      <div className="user-details">
                        <div className="user-name"></div>
                        <div className="user-email"></div>
                      </div>
                    </td>
                    <td className="user-role"></td>
                    <td className="user-status">
                      <div className="status-tag"></div>
                    </td>
                    <td className="user-last-login"></td>
                    <td className="user-actions">
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
    <div className="users-page fade-in">
      <div className="users-header">
        <div>
          <h1 className="users-title">Gerenciamento de Usuários</h1>
          <p className="users-subtitle">Controle de acesso e permissões dos usuários</p>
        </div>
        <Button variant="primary" icon="fas fa-plus" onClick={handleAddUser}>
          Novo Usuário
        </Button>
      </div>

      <div className="users-filters">
        <div className="filters-header">
          <h3 className="filters-title">
            <i className="fas fa-filter"></i>
            Filtros
          </h3>
          <button className="clear-filters">Limpar filtros</button>
        </div>
        <div className="filters-content">
          <div className="filter-group">
            <label className="filter-label">Cargo</label>
            <select className="border border-gray-300 rounded-lg px-3 py-2">
              <option>Todos os cargos</option>
              <option>Administrador</option>
              <option>Financeiro</option>
              <option>Gestor de Projetos</option>
              <option>Visualizador</option>
            </select>
          </div>
          <div className="filter-group">
            <label className="filter-label">Status</label>
            <select className="border border-gray-300 rounded-lg px-3 py-2">
              <option>Status</option>
              <option>Ativo</option>
              <option>Inativo</option>
            </select>
          </div>
          <div className="filter-group">
            <label className="filter-label">Permissão</label>
            <select className="border border-gray-300 rounded-lg px-3 py-2">
              <option>Todas as permissões</option>
              <option>Leitura</option>
              <option>Escrita</option>
              <option>Admin</option>
            </select>
          </div>
        </div>
      </div>

      <div className="users-container">
        <div className="users-header">
          <h3 className="users-title">Lista de Usuários</h3>
          <div className="users-count">{users.length} usuários encontrados</div>
        </div>
        <div className="users-table">
          <table>
            <thead>
              <tr>
                <th>Usuário</th>
                <th>Cargo</th>
                <th>Status</th>
                <th>Último acesso</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td className="user-info">
                    <div className="user-avatar">
                      {user.avatar}
                    </div>
                    <div className="user-details">
                      <div className="user-name">{user.name}</div>
                      <div className="user-email">{user.email}</div>
                    </div>
                  </td>
                  <td className="user-role">{user.role}</td>
                  <td className="user-status">
                    <span className="status-tag active">
                      {user.status}
                    </span>
                  </td>
                  <td className="user-last-login">{user.lastLogin}</td>
                  <td className="user-actions">
                    <button 
                      className="action-button edit"
                      onClick={() => handleEditUser(user)}
                    >
                      <i className="fas fa-edit"></i>
                    </button>
                    <button 
                      className="action-button delete"
                      onClick={() => handleDeleteUser(user.id)}
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="user-stats">
        <div className="stats-grid">
          <Card className="stat-card">
            <div className="stat-content">
              <div className="stat-icon">
                <i className="fas fa-users"></i>
              </div>
              <div className="stat-info">
                <h4 className="stat-title">Total de Usuários</h4>
                <p className="stat-value">{users.length}</p>
              </div>
            </div>
          </Card>
          <Card className="stat-card">
            <div className="stat-content">
              <div className="stat-icon">
                <i className="fas fa-user-check"></i>
              </div>
              <div className="stat-info">
                <h4 className="stat-title">Usuários Ativos</h4>
                <p className="stat-value">{users.filter(u => u.status === 'Ativo').length}</p>
              </div>
            </div>
          </Card>
          <Card className="stat-card">
            <div className="stat-content">
              <div className="stat-icon">
                <i className="fas fa-user-clock"></i>
              </div>
              <div className="stat-info">
                <h4 className="stat-title">Usuários Inativos</h4>
                <p className="stat-value">{users.filter(u => u.status === 'Inativo').length}</p>
              </div>
            </div>
          </Card>
          <Card className="stat-card">
            <div className="stat-content">
              <div className="stat-icon">
                <i className="fas fa-user-shield"></i>
              </div>
              <div className="stat-info">
                <h4 className="stat-title">Administradores</h4>
                <p className="stat-value">{users.filter(u => u.role === 'Administrador').length}</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default UsersPage;