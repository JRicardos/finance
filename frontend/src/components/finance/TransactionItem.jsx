import React from 'react';
import './TransactionItem.css';

function TransactionItem({ transaction, onEdit, onDelete }) {
  const getTypeColor = (type) => {
    return type === 'receita' ? 'text-success' : 'text-danger';
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Pessoal': 'bg-purple-100 text-purple-800',
      'Marketing': 'bg-blue-100 text-blue-800',
      'Infraestrutura': 'bg-green-100 text-green-800',
      'Operações': 'bg-yellow-100 text-yellow-800',
      'Outros': 'bg-gray-100 text-gray-800'
    };
    return colors[category] || colors['Outros'];
  };

  return (
    <tr className="transaction-row">
      <td className="transaction-description">
        <div className="description-text">{transaction.description}</div>
        <div className="transaction-type">
          {transaction.type === 'receita' ? 'Receita' : 'Despesa'}
        </div>
      </td>
      <td className="transaction-category">
        <span className={`category-tag ${getCategoryColor(transaction.category)}`}>
          {transaction.category}
        </span>
      </td>
      <td className="transaction-date">
        {new Date(transaction.date).toLocaleDateString('pt-BR')}
      </td>
      <td className={`transaction-amount ${getTypeColor(transaction.type)}`}>
        {transaction.type === 'receita' ? '+' : '-'} R$ {transaction.amount.toLocaleString('pt-BR')}
      </td>
      <td className="transaction-actions">
        <button className="action-button edit" onClick={() => onEdit(transaction)}>
          <i className="fas fa-edit"></i>
        </button>
        <button className="action-button delete" onClick={() => onDelete(transaction.id)}>
          <i className="fas fa-trash"></i>
        </button>
      </td>
    </tr>
  );
}

export default TransactionItem;