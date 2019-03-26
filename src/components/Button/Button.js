import React from 'react'

import './Button.css';

const Button = ({ children, ...props }) => (
  <button type="button" className="Button" {...props}>
    { children }
  </button>
);

export default Button;