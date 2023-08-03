import React from 'react';
import './Header.css';
import './colors.css';

const Header = ({ title, description }) => {
  return (
    <div className="header" style={{ backgroundColor: 'var(--color-white'}}>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Header;