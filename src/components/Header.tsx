import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <h1 className="logo-text">PokeIndex</h1>
        </div>
        <div className="header-buttons">
          <button className="header-button">Invest</button>
          <button className="header-button">Portfolio</button>
        </div>
      </div>
    </header>
  );
};

export default Header; 