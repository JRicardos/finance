import React, { useState, useEffect } from 'react';
import './FinancePage.css';
import Button from '../components/ui/Button';
import TransactionItem from '../components/finance/TransactionItem';

function FinancePage() {
  const [loading, setLoading] = useState(true);
  const [transactions, setTransactions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalTransactions, setTotalTransactions] = useState(0);

  useEffect(() => {
    // Simular carregamento de dados
    setTimeout(() => {
      const mockTransactions = [
        {
          id: '1',
          description: 'Pagamento cliente - Projeto E-commerce',
          type: 'receita',
          amount: 80000,
          date: '2024-06-15',
          category: 'Vendas',
          project: 'Plataforma E-commerce'
        },
        {
          id: '2',
          description: 'Salário equipe desenvolvimento',
          type: 'despesa',
          amount: 50000,
          date: '2024-06-10',
          category: 'Pessoal',
          project: 'Plataforma E-commerce'
        },
        {
          id: '3',
          description: 'Anúncios Google Ads',
          type: 'despesa',
          amount: 20000,
          date: '2024-06-05',
          category: 'Marketing',
          project: 'Campanha Marketing Digital'
        },
        {
          id: '4',
          description: 'Receita campanha digital',
          type: 'receita',
          amount: 50000,
          date: '2024-06-01',
          category: 'Vendas',
          project: 'Campanha Marketing Digital'
        },
        {
          id: '5',
          description: 'Servidores AWS',
          type: 'despesa',
          amount: 28000,
          date: '2024-05-28',
          category: 'Infraestrutura',
          project: 'Plataforma E-commerce'
        },
        {
          id: '6',
          description: 'Treinamento equipe',
          type: 'despesa',
          amount: 15000,
          date: '2024-05-20',
          category: 'Pessoal',
          project: 'Reestruturação Interna'
        },
        {
          id: '7',
          description: 'Licenças de software',
          type: 'despesa',
          amount: 12000,
          date: '2024-05-15',
          category: 'Operações',
          project: 'Sistema de Gestão'
        },
        {
          id: '8',
          description: 'Consultoria externa',
          type: 'receita',
          amount: 25000,
          date: '2024-05-10',
          category: 'Serviços',
          project: 'Consultoria'
        }
      ];
      
      setTransactions(mockTransactions);
      setTotalTransactions(mockTransactions.length);
      setTotalPages(Math.ceil(mockTransactions.length / 10));
      setLoading(false);
    }, 1000);
  }, []);

  const handleEditTransaction = (transaction) => {
    console.log('Editar transação:', transaction);
  };

  const handleDeleteTransaction = (transactionId) => {
    console.log('Excluir transação:', transactionId);
  };

  const summary = {
    revenue: transactions.filter(t => t.type === 'receita').reduce((sum, t) => sum + t.amount, 0),
    expense: transactions.filter(t => t.type === 'despesa').reduce((sum, t) => sum + t.amount, 0),
    balance: transactions.reduce((sum, t) => t.type === 'receita' ? sum + t.amount : sum - t.amount, 0)
  };

  if (loading) {
    return (
      <div className="finance-page">
        <div className="finance-header">
          <div>
            <h1 className="finance-title">Gestão Financeira</h1>
            <p className="finance-subtitle">Controle de receitas, despesas e fluxo de caixa</p>
          </div>
          <div className="finance-actions">
            <Button variant="success" icon="fas fa-plus">
              Receita
            </Button>
            <Button variant="primary" icon="fas fa-plus">
              Despesa
            </Button>
          </div>
        </div>

        <div className="finance-filters">
          <div className="filters-header">
            <h3 className="filters-title">
              <i className="fas fa-filter"></i>
              Filtros
            </h3>
            <button className="clear-filters">Limpar filtros</button>
          </div>
          <div className="filters-content">
            <div className="filter-group">
              <label className="filter-label">Data Início</label>
              <input type="date" className="border border-gray-300 rounded-lg px-3 py-2" />
            </div>
            <div className="filter-group">
              <label className="filter-label">Data Fim</label>
              <input type="date" className="border border-gray-300 rounded-lg px-3 py-2" />
            </div>
            <div className="filter-group">
              <label className="filter-label">Tipo</label>
              <select className="border border-gray-300 rounded-lg px-3 py-2">
                <option>Todos</option>
                <option>Receita</option>
                <option>Despesa</option>
              </select>
            </div>
            <div className="filter-group">
              <label className="filter-label">Categoria</label>
              <select className="border border-gray-300 rounded-lg px-3 py-2">
                <option>Todas</option>
                <option>Pessoal</option>
                <option>Marketing</option>
                <option>Infraestrutura</option>
                <option>Operações</option>
              </select>
            </div>
          </div>
        </div>

        <div className="summary-grid">
          <div className="summary-card revenue">
            <div className="summary-icon">
              <i className="fas fa-arrow-down"></i>
            </div>
            <h4 className="summary-title">Receitas</h4>
            <p className="summary-value">R$ 0,00</p>
          </div>
          <div className="summary-card expense">
            <div className="summary-icon">
              <i className="fas fa-arrow-up"></i>
            </div>
            <h4 className="summary-title">Despesas</h4>
            <p className="summary-value">R$ 0,00</p>
          </div>
          <div className="summary-card balance">
            <div className="summary-icon">
              <i className="fas fa-wallet"></i>
            </div>
            <h4 className="summary-title">Saldo</h4>
            <p className="summary-value">R$ 0,00</p>
          </div>
        </div>

        <div className="transactions-container">
          <div className="transactions-header">
            <h3 className="transactions-title">Extrato Financeiro</h3>
            <div className="transactions-count">0 transações encontradas</div>
          </div>
          <div className="transactions-table">
            <table>
              <thead>
                <tr>
                  <th>Descrição</th>
                  <th>Categoria</th>
                  <th>Data</th>
                  <th>Valor</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5].map(i => (
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
    <div className="finance-page fade-in">
      <div className="finance-header">
        <div>
          <h1 className="finance-title">Gestão Financeira</h1>
          <p className="finance-subtitle">Controle de receitas, despesas e fluxo de caixa</p>
        </div>
        <div className="finance-actions">
          <Button variant="success" icon="fas fa-plus">
            Receita
          </Button>
          <Button variant="primary" icon="fas fa-plus">
            Despesa
          </Button>
        </div>
      </div>

      <div className="finance-filters">
        <div className="filters-header">
          <h3 className="filters-title">
            <i className="fas fa-filter"></i>
            Filtros
          </h3>
          <button className="clear-filters">Limpar filtros</button>
        </div>
        <div className="filters-content">
          <div className="filter-group">
            <label className="filter-label">Data Início</label>
            <input type="date" className="border border-gray-300 rounded-lg px-3 py-2" />
          </div>
          <div className="filter-group">
            <label className="filter-label">Data Fim</label>
            <input type="date" className="border border-gray-300 rounded-lg px-3 py-2" />
          </div>
          <div className="filter-group">
            <label className="filter-label">Tipo</label>
            <select className="border border-gray-300 rounded-lg px-3 py-2">
              <option>Todos</option>
              <option>Receita</option>
              <option>Despesa</option>
            </select>
          </div>
          <div className="filter-group">
            <label className="filter-label">Categoria</label>
            <select className="border border-gray-300 rounded-lg px-3 py-2">
              <option>Todas</option>
              <option>Pessoal</option>
              <option>Marketing</option>
              <option>Infraestrutura</option>
              <option>Operações</option>
            </select>
          </div>
        </div>
      </div>

      <div className="summary-grid">
        <div className="summary-card revenue">
          <div className="summary-icon">
            <i className="fas fa-arrow-down"></i>
          </div>
          <h4 className="summary-title">Receitas</h4>
          <p className="summary-value">R$ {summary.revenue.toLocaleString('pt-BR')}</p>
        </div>
        <div className="summary-card expense">
          <div className="summary-icon">
            <i className="fas fa-arrow-up"></i>
          </div>
          <h4 className="summary-title">Despesas</h4>
          <p className="summary-value">R$ {summary.expense.toLocaleString('pt-BR')}</p>
        </div>
        <div className="summary-card balance">
          <div className="summary-icon">
            <i className="fas fa-wallet"></i>
          </div>
          <h4 className="summary-title">Saldo</h4>
          <p className="summary-value">R$ {summary.balance.toLocaleString('pt-BR')}</p>
        </div>
      </div>

      <div className="transactions-container">
        <div className="transactions-header">
          <h3 className="transactions-title">Extrato Financeiro</h3>
          <div className="transactions-count">{totalTransactions} transações encontradas</div>
        </div>
        <div className="transactions-table">
          <table>
            <thead>
              <tr>
                <th>Descrição</th>
                <th>Categoria</th>
                <th>Data</th>
                <th>Valor</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map(transaction => (
                <TransactionItem
                  key={transaction.id}
                  transaction={transaction}
                  onEdit={handleEditTransaction}
                  onDelete={handleDeleteTransaction}
                />
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="pagination">
          <div className="pagination-info">
            Mostrando {(currentPage - 1) * 10 + 1} a {Math.min(currentPage * 10, totalTransactions)} de {totalTransactions} resultados
          </div>
          <div className="pagination-controls">
            <button 
              className="pagination-button"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(prev => prev - 1)}
            >
              Anterior
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                className={`pagination-button ${currentPage === i + 1 ? 'active' : ''}`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <button 
              className="pagination-button"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(prev => prev + 1)}
            >
              Próximo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinancePage;