import React from 'react';
import Card from '../ui/Card';
import './StatsCard.css';

function StatsCard({ title, value, icon, change, changeType = 'positive' }) {
  return (
    <Card className="stats-card">
      <div className="stats-content">
        <div className="stats-header">
          <div className="stats-icon">
            {icon}
          </div>
          <h4 className="stats-title">{title}</h4>
        </div>
        
        <div className="stats-value">
          <p className="value-text">{value}</p>
        </div>
        
        {change && (
          <div className={`stats-change ${changeType === 'positive' ? 'change-positive' : 'change-negative'}`}>
            <i className={`fas ${changeType === 'positive' ? 'fa-arrow-up' : 'fa-arrow-down'}`}></i>
            <span>{change}</span>
          </div>
        )}
      </div>
    </Card>
  );
}

export default StatsCard;