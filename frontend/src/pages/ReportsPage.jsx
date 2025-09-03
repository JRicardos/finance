import React, { useState } from 'react';
import './ReportsPage.css';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

function ReportsPage() {
  const [selectedReport, setSelectedReport] = useState('financial');
  const [dateRange, setDateRange] = useState('monthly');
  const [loading, setLoading] = useState(false);

  const reports = [
    {
      id: 'financial',
      title: 'Relatório Financeiro Mensal',
      description: 'Resumo de receitas, despesas e lucro do mês',
      icon: 'fas fa-file-invoice'
    },
    {
      id: 'projects',
      title: 'Análise de Projetos',
      description: 'Comparativo de desempenho de projetos',
      icon: 'fas fa-chart-pie'
    },
    {
      id: 'team',
      title: 'Relatório de Equipe',
      description: 'Produtividade e desempenho da equipe',
      icon: 'fas fa-users'
    },
    {
      id: 'cashflow',
      title: 'Fluxo de Caixa',
      description: 'Movimentação financeira detalhada',
      icon: 'fas fa-exchange-alt'
    }
  ];

  const handleGenerateReport = (reportId) => {
    setLoading(true);
    console.log(`Gerando relatório: ${reportId}`);
    
    // Simular geração de relatório
    setTimeout(() => {
      setLoading(false);
      alert(`Relatório "${reports.find(r => r.id === reportId)?.title}" gerado com sucesso!`);
    }, 2000);
  };

  return (
    <div className="reports-page fade-in">
      <div className="reports-header">
        <div>
          <h1 className="reports-title">Relatórios e Análises</h1>
          <p className="reports-subtitle">Relatórios detalhados e análises financeiras</p>
        </div>
        <Button variant="primary" icon="fas fa-file-export">
          Exportar Relatório
        </Button>
      </div>

      <div className="reports-filters">
        <div className="filters-header">
          <h3 className="filters-title">
            <i className="fas fa-filter"></i>
            Filtros
          </h3>
          <button className="clear-filters">Limpar filtros</button>
        </div>
        <div className="filters-content">
          <div className="filter-group">
            <label className="filter-label">Período</label>
            <select 
              className="border border-gray-300 rounded-lg px-3 py-2"
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
            >
              <option value="daily">Diário</option>
              <option value="weekly">Semanal</option>
              <option value="monthly">Mensal</option>
              <option value="quarterly">Trimestral</option>
              <option value="yearly">Anual</option>
            </select>
          </div>
          <div className="filter-group">
            <label className="filter-label">Data Início</label>
            <input type="date" className="border border-gray-300 rounded-lg px-3 py-2" />
          </div>
          <div className="filter-group">
            <label className="filter-label">Data Fim</label>
            <input type="date" className="border border-gray-300 rounded-lg px-3 py-2" />
          </div>
          <div className="filter-group">
            <label className="filter-label">Formato</label>
            <select className="border border-gray-300 rounded-lg px-3 py-2">
              <option>PDF</option>
              <option>Excel</option>
              <option>CSV</option>
            </select>
          </div>
        </div>
      </div>

      <div className="reports-grid">
        {reports.map(report => (
          <Card key={report.id} className="report-card">
            <div className="report-header">
              <div className="report-icon">
                <i className={report.icon}></i>
              </div>
              <div className="report-info">
                <h3 className="report-title">{report.title}</h3>
                <p className="report-description">{report.description}</p>
              </div>
            </div>
            <div className="report-actions">
              <Button 
                variant="primary" 
                onClick={() => handleGenerateReport(report.id)}
                disabled={loading}
                className="generate-button"
              >
                {loading ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i>
                    Gerando...
                  </>
                ) : (
                  <>
                    <i className="fas fa-file-download"></i>
                    Gerar Relatório
                  </>
                )}
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <div className="analytics-section">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Análise Financeira</h3>
          </div>
          <div className="card-body">
            <div className="analytics-content">
              <div className="chart-placeholder">
                <i className="fas fa-chart-line chart-icon"></i>
                <p>Gráfico de análise financeira</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scheduled-reports">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Relatórios Agendados</h3>
            <Button variant="primary" icon="fas fa-plus" size="small">
              Novo Agendamento
            </Button>
          </div>
          <div className="card-body">
            <div className="scheduled-list">
              <div className="scheduled-item">
                <div className="scheduled-info">
                  <h4 className="scheduled-title">Relatório Financeiro Mensal</h4>
                  <p className="scheduled-description">Todo dia 1º do mês às 09:00</p>
                </div>
                <div className="scheduled-actions">
                  <Button variant="outline" size="small" icon="fas fa-edit"></Button>
                  <Button variant="outline" size="small" icon="fas fa-trash" className="text-danger"></Button>
                </div>
              </div>
              <div className="scheduled-item">
                <div className="scheduled-info">
                  <h4 className="scheduled-title">Análise de Projetos</h4>
                  <p className="scheduled-description">Toda segunda-feira às 10:00</p>
                </div>
                <div className="scheduled-actions">
                  <Button variant="outline" size="small" icon="fas fa-edit"></Button>
                  <Button variant="outline" size="small" icon="fas fa-trash" className="text-danger"></Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReportsPage;