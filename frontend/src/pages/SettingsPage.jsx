import React, { useState } from 'react';
import './SettingsPage.css';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';

function SettingsPage() {
  const [companyInfo, setCompanyInfo] = useState({
    name: 'Empresa XYZ',
    cnpj: '12.345.678/0001-90',
    phone: '(11) 99999-9999',
    email: 'contato@empresaxyz.com.br',
    address: 'Av. Paulista, 1000 - São Paulo/SP'
  });

  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    autoReports: true,
    autoBackup: false,
    darkMode: false
  });

  const [currentPlan, setCurrentPlan] = useState('professional');

  const plans = [
    {
      id: 'basic',
      name: 'Básico',
      price: 'R$ 49',
      period: 'mês',
      features: ['Até 10 usuários', 'Até 20 projetos', 'Relatórios básicos', 'Suporte por email'],
      popular: false
    },
    {
      id: 'professional',
      name: 'Profissional',
      price: 'R$ 99',
      period: 'mês',
      features: ['Até 50 usuários', 'Até 100 projetos', 'Relatórios avançados', 'Suporte prioritário', 'Backup automático'],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Empresarial',
      price: 'R$ 199',
      period: 'mês',
      features: ['Usuários ilimitados', 'Projetos ilimitados', 'Relatórios personalizados', 'Suporte 24/7', 'Backup automático', 'Integrações avançadas'],
      popular: false
    }
  ];

  const integrations = [
    {
      id: 'google',
      name: 'Google Workspace',
      description: 'Sincronização de contatos',
      icon: 'fab fa-google',
      connected: true
    },
    {
      id: 'microsoft',
      name: 'Microsoft 365',
      description: 'Integração com Outlook',
      icon: 'fab fa-microsoft',
      connected: false
    },
    {
      id: 'slack',
      name: 'Slack',
      description: 'Notificações em tempo real',
      icon: 'fab fa-slack',
      connected: false
    },
    {
      id: 'zapier',
      name: 'Zapier',
      description: 'Automações avançadas',
      icon: 'fas fa-bolt',
      connected: false
    }
  ];

  const handleSaveCompanyInfo = () => {
    console.log('Salvar informações da empresa:', companyInfo);
    alert('Informações da empresa salvas com sucesso!');
  };

  const handleSavePreferences = () => {
    console.log('Salvar preferências:', preferences);
    alert('Preferências salvas com sucesso!');
  };

  const handleChangePlan = (planId) => {
    setCurrentPlan(planId);
    alert(`Plano alterado para ${plans.find(p => p.id === planId)?.name}!`);
  };

  const toggleIntegration = (integrationId) => {
    console.log('Alternar integração:', integrationId);
  };

  return (
    <div className="settings-page fade-in">
      <div className="settings-header">
        <div>
          <h1 className="settings-title">Configurações da Empresa</h1>
          <p className="settings-subtitle">Gerencie informações da empresa e preferências do sistema</p>
        </div>
      </div>

      <div className="settings-grid">
        <div className="settings-main">
          <Card className="company-info-card">
            <div className="card-header">
              <h3 className="card-title">Informações da Empresa</h3>
            </div>
            <div className="card-body">
              <div className="form-grid">
                <Input
                  label="Nome da Empresa"
                  value={companyInfo.name}
                  onChange={(e) => setCompanyInfo({...companyInfo, name: e.target.value})}
                />
                <Input
                  label="CNPJ"
                  value={companyInfo.cnpj}
                  onChange={(e) => setCompanyInfo({...companyInfo, cnpj: e.target.value})}
                />
                <Input
                  label="Telefone"
                  value={companyInfo.phone}
                  onChange={(e) => setCompanyInfo({...companyInfo, phone: e.target.value})}
                />
                <Input
                  label="Email"
                  type="email"
                  value={companyInfo.email}
                  onChange={(e) => setCompanyInfo({...companyInfo, email: e.target.value})}
                />
                <div className="col-span-2">
                  <Input
                    label="Endereço"
                    value={companyInfo.address}
                    onChange={(e) => setCompanyInfo({...companyInfo, address: e.target.value})}
                  />
                </div>
              </div>
              <div className="form-actions">
                <Button variant="primary" onClick={handleSaveCompanyInfo}>
                  Salvar Alterações
                </Button>
              </div>
            </div>
          </Card>

          <Card className="preferences-card">
            <div className="card-header">
              <h3 className="card-title">Preferências do Sistema</h3>
            </div>
            <div className="card-body">
              <div className="preferences-grid">
                <div className="preference-item">
                  <div className="preference-info">
                    <h4 className="preference-title">Notificações por Email</h4>
                    <p className="preference-description">Receba alertas importantes por email</p>
                  </div>
                  <label className="switch">
                    <input 
                      type="checkbox" 
                      checked={preferences.emailNotifications}
                      onChange={(e) => setPreferences({...preferences, emailNotifications: e.target.checked})}
                    />
                    <span className="slider"></span>
                  </label>
                </div>
                <div className="preference-item">
                  <div className="preference-info">
                    <h4 className="preference-title">Relatórios Automáticos</h4>
                    <p className="preference-description">Envio automático de relatórios mensais</p>
                  </div>
                  <label className="switch">
                    <input 
                      type="checkbox" 
                      checked={preferences.autoReports}
                      onChange={(e) => setPreferences({...preferences, autoReports: e.target.checked})}
                    />
                    <span className="slider"></span>
                  </label>
                </div>
                <div className="preference-item">
                  <div className="preference-info">
                    <h4 className="preference-title">Backup Automático</h4>
                    <p className="preference-description">Backup diário dos dados da empresa</p>
                  </div>
                  <label className="switch">
                    <input 
                      type="checkbox" 
                      checked={preferences.autoBackup}
                      onChange={(e) => setPreferences({...preferences, autoBackup: e.target.checked})}
                    />
                    <span className="slider"></span>
                  </label>
                </div>
                <div className="preference-item">
                  <div className="preference-info">
                    <h4 className="preference-title">Modo Escuro</h4>
                    <p className="preference-description">Interface escura para melhor visualização</p>
                  </div>
                  <label className="switch">
                    <input 
                      type="checkbox" 
                      checked={preferences.darkMode}
                      onChange={(e) => setPreferences({...preferences, darkMode: e.target.checked})}
                    />
                    <span className="slider"></span>
                  </label>
                </div>
              </div>
              <div className="form-actions">
                <Button variant="primary" onClick={handleSavePreferences}>
                  Salvar Preferências
                </Button>
              </div>
            </div>
          </Card>

          <Card className="integrations-card">
            <div className="card-header">
              <h3 className="card-title">Integrações</h3>
            </div>
            <div className="card-body">
              <div className="integrations-grid">
                {integrations.map(integration => (
                  <div key={integration.id} className="integration-item">
                    <div className="integration-icon">
                      <i className={integration.icon}></i>
                    </div>
                    <div className="integration-info">
                      <h4 className="integration-title">{integration.name}</h4>
                      <p className="integration-description">{integration.description}</p>
                    </div>
                    <label className="switch">
                      <input 
                        type="checkbox" 
                        checked={integration.connected}
                        onChange={() => toggleIntegration(integration.id)}
                      />
                      <span className="slider"></span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        <div className="settings-sidebar">
          <Card className="plan-card">
            <div className="card-header">
              <h3 className="card-title">Plano Atual</h3>
            </div>
            <div className="card-body">
              <div className="plan-current">
                <div className="plan-icon">
                  <i className="fas fa-crown"></i>
                </div>
                <h4 className="plan-name">Profissional</h4>
                <p className="plan-price">R$ 99<span className="plan-period">/mês</span></p>
                <p className="plan-description">Até 50 usuários e 100 projetos</p>
              </div>
              
              <div className="plan-features">
                <h5 className="features-title">Recursos Inclusos:</h5>
                <ul className="features-list">
                  <li><i className="fas fa-check-circle text-success"></i> Até 50 usuários</li>
                  <li><i className="fas fa-check-circle text-success"></i> Até 100 projetos</li>
                  <li><i className="fas fa-check-circle text-success"></i> Relatórios avançados</li>
                  <li><i className="fas fa-check-circle text-success"></i> Suporte prioritário</li>
                  <li><i className="fas fa-check-circle text-success"></i> Backup automático</li>
                </ul>
              </div>
              
              <div className="plan-actions">
                <Button variant="primary" className="w-full">
                  Alterar Plano
                </Button>
              </div>
            </div>
          </Card>

          <Card className="billing-card">
            <div className="card-header">
              <h3 className="card-title">Faturamento</h3>
            </div>
            <div className="card-body">
              <div className="billing-info">
                <div className="billing-item">
                  <span className="billing-label">Próximo pagamento:</span>
                  <span className="billing-value">15/07/2024</span>
                </div>
                <div className="billing-item">
                  <span className="billing-label">Método de pagamento:</span>
                  <span className="billing-value">Cartão de Crédito</span>
                </div>
                <div className="billing-item">
                  <span className="billing-label">Último pagamento:</span>
                  <span className="billing-value">15/06/2024</span>
                </div>
              </div>
              <div className="billing-actions">
                <Button variant="outline" className="w-full mb-2">
                  <i className="fas fa-credit-card mr-2"></i>
                  Gerenciar Pagamento
                </Button>
                <Button variant="outline" className="w-full">
                  <i className="fas fa-file-invoice mr-2"></i>
                  Ver Faturas
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;