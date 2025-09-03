import React from 'react';
import './Button.css';

function Button({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  icon, 
  onClick, 
  disabled = false,
  className = '',
  type = 'button'
}) {
  const baseClasses = 'btn';
  const variantClasses = `btn-${variant}`;
  const sizeClasses = `btn-${size}`;
  const disabledClass = disabled ? 'btn-disabled' : '';
  
  const combinedClasses = `${baseClasses} ${variantClasses} ${sizeClasses} ${disabledClass} ${className}`;

  return (
    <button 
      className={combinedClasses} 
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {icon && <i className={`${icon} btn-icon`}></i>}
      {children}
    </button>
  );
}

export default Button;