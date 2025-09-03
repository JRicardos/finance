import React from 'react';
import './UserItem.css';

function UserItem({ user, onEdit, onDelete, onView }) {
  // Função para obter as iniciais do nome
  const getUserInitials = (name) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  // Função para obter a cor do avatar baseada no nome
  const getAvatarColor = (name) => {
    const colors = [
      'bg-indigo-100 text-indigo-800',
      'bg-green-100 text-green-800',
      'bg-purple-100 text-purple-800',
      'bg-yellow-100 text-yellow-800',
      'bg-blue-100 text-blue-800',
      'bg-pink-100 text-pink-800'
    ];
    
    // Gerar índice baseado no nome
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    const index = Math.abs(hash) % colors.length;
    return colors[index];
  };

  // Função para formatar data
  const formatDate = (dateString) => {
    if (!dateString) return 'Nunca';
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Função para traduzir o cargo
  const translateRole = (role) => {
    const translations = {
      'ADMIN': 'Administrador',
      'FINANCE': 'Financeiro',
      'PROJECT_MANAGER': 'Gestor de Projetos',
      'VIEWER': 'Visualizador'
    };
    return translations[role] || role;
  };

  // Função para obter classe de status
  const getStatusClass = (status) => {
    return status === 'ACTIVE' 
      ? 'status-active' 
      : 'status-inactive';
  };

  // Função para obter texto de status
  const getStatusText = (status) => {
    return status === 'ACTIVE' ? 'Ativo' : 'Inativo';
  };

  return (
    <tr className="user-item">
      <td className="user-info-cell">
        <div className="user-info">
          <div className={`user-avatar ${getAvatarColor(user.name)}`}>
            {getUserInitials(user.name)}
          </div>
          <div className="user-details">
            <div className="user-name">{user.name}</div>
            <div className="user-email">{user.email}</div>
          </div>
        </div>
      </td>
      
      <td className="user-role-cell">
        <span className="user-role">{translateRole(user.role)}</span>
      </td>
      
      <td className="user-status-cell">
        <span className={`status-tag ${getStatusClass(user.status)}`}>
          {getStatusText(user.status)}
        </span>
      </td>
      
      <td className="user-last-access-cell">
        <div className="user-last-access">
          {formatDate(user.lastAccess)}
        </div>
      </td>
      
      <td className="user-actions-cell">
        <div className="user-actions">
          <button 
            className="action-button view"
            onClick={() => onView(user)}
            title="Visualizar"
          >
            <i className="fas fa-eye"></i>
          </button>
          <button 
            className="action-button edit"
            onClick={() => onEdit(user)}
            title="Editar"
          >
            <i className="fas fa-edit"></i>
          </button>
          <button 
            className="action-button delete"
            onClick={() => onDelete(user.id)}
            title="Excluir"
          >
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </td>
    </tr>
  );
}

export default UserItem;