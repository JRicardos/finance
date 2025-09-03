import React from 'react';
import './BarChart.css';

function BarChart({ data, title, height = 'h-64' }) {
  const maxValue = Math.max(...data.map(item => item.value));

  return (
    <div className="bar-chart">
      {title && <h4 className="chart-title">{title}</h4>}
      <div className={`${height} flex items-end space-x-2`}>
        {data.map((item, index) => (
          <div key={index} className="flex-1 flex flex-col items-center">
            <div className="w-full bg-gray-200 rounded-t-lg chart-bar-container">
              <div 
                className="w-full bg-primary-600 rounded-t-lg chart-bar"
                style={{ height: `${(item.value / maxValue) * 100}%` }}
              ></div>
            </div>
            <p className="text-xs text-gray-600 mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BarChart;