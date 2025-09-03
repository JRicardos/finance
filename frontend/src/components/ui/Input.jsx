import React from 'react';
import './Input.css';

function Input({
  label,
  id,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  required = false,
  disabled = false,
  icon,
  className = ''
}) {
  return (
    <div className={`input-group ${className}`}>
      {label && (
        <label htmlFor={id} className="input-label">
          {label} {required && <span className="required">*</span>}
        </label>
      )}
      
      <div className={`input-wrapper ${icon ? 'input-with-icon' : ''} ${error ? 'input-error' : ''}`}>
        {icon && (
          <div className="input-icon">
            <i className={icon}></i>
          </div>
        )}
        
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          disabled={disabled}
          className="input-field"
        />
      </div>
      
      {error && <p className="input-error-message">{error}</p>}
    </div>
  );
}

export default Input;