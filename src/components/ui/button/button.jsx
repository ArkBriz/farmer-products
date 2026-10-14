import React from 'react';
import './style.css';

function Button({children}) {
  return (
    <a href="/" className="buy-btn">
      {children}
    </a>
  )
}

export default Button;