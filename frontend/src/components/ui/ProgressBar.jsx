import React from 'react';
import './ProgressBar.css';

function ProgressBar({ percentage, color = 'primary', height = 'h-2' }) {
  const getColorClass = () => {
    switch(color) {
      case 'success': return 'bg-success';
      case 'warning': return 'bg-warning';
      case 'danger': return 'bg-danger';
      default: return 'bg-primary-600';
    }
  };

  return (
    <div className={`progress-bar ${height} bg-gray-200 rounded-full overflow-hidden`}>
      <div 
        className={`progress-fill ${getColorClass()} rounded-full transition-all duration-500`}
        style={{ width: `${Math.min(percentage, 100)}%` }}
      ></div>
    </div>
  );
}

export default ProgressBar;