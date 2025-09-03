import React, { useState } from 'react';
import './UserList.css';
import UserItem from './UserItem';
import Button from '../ui/Button';

function UserList({ users, onEdit, onDelete, onView }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  // Filtrar usuários
  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesRole = roleFilter === 'all' || user.role === roleFilter;
    const matchesStatus = statusFilter === 'all' || user.status === statusFilter;
    
    return matchesSearch && matchesRole && matchesStatus;
  });

  // Função para limpar filtros
  const clearFilters = () => {
    setSearchTerm('');
    setRoleFilter('all');
    setStatusFilter('all');
  };

  return (
    <div className="user-list">
      {/* Filtros */}
      <div className="user-filters">
        <div className="filters-header">
          <h3 className="filters-title">
            <i className="fas fa-filter mr-2 text-gray-600"></i>
            Filtros
          </h3>
          <button 
            className="clear-filters"
            onClick={clearFilters}
          >
            Limpar filtros
          </button>
        </div>
        
        <div className="filters-content">
          <div className="filter-group">
            <label className="filter-label">Buscar</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="fas fa-search text-gray-400"></i>
              </div>
              <input
                type="text"
                className="filter-input"
                placeholder="Buscar usuários..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          <div className="filter-group">
            <label className="filter-label">Cargo</label>
            <select
              className="filter-select"
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
            >
              <option value="all">Todos os cargos</option>
              <option value="ADMIN">Administrador</option>
              <option value="FINANCE">Financeiro</option>
              <option value="PROJECT_MANAGER">Gestor de Projetos</option>
              <option value="VIEWER">Visualizador</option>
            </select>
          </div>
          
          <div className="filter-group">
            <label className="filter-label">Status</label>
            <select
              className="filter-select"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">Todos os status</option>
              <option value="ACTIVE">Ativo</option>
              <option value="INACTIVE">Inativo</option>
            </select>
          </div>
        </div>
      </div>

      {/* Lista de Usuários */}
      <div className="users-container">
        <div className="users-header">
          <h3 className="users-title">Lista de Usuários</h3>
          <div className="users-count">
            {filteredUsers.length} de {users.length} usuários
          </div>
        </div>
        
        {filteredUsers.length === 0 ? (
          <div className="users-empty">
            <div className="empty-icon">
              <i className="fas fa-users text-gray-300 text-5xl"></i>
            </div>
            <h4 className="empty-title">Nenhum usuário encontrado</h4>
            <p className="empty-description">
              Tente ajustar os filtros ou adicione um novo usuário
            </p>
            <Button variant="primary" icon="fas fa-plus">
              Adicionar Usuário
            </Button>
          </div>
        ) : (
          <div className="users-table-container">
            <table className="users-table">
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
                {filteredUsers.map(user => (
                  <UserItem
                    key={user.id}
                    user={user}
                    onEdit={onEdit}
                    onDelete={onDelete}
                    onView={onView}
                  />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserList;