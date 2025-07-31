import React from 'react';
import './FloatingPokeballs.css';

const FloatingPokeballs: React.FC = () => {
  return (
    <div className="floating-pokeballs">
      {[...Array(8)].map((_, index) => (
        <div
          key={index}
          className="pokeball"
          style={{
            '--delay': `${index * 0.5}s`,
            '--duration': `${3 + index * 0.5}s`,
            '--x-start': `${Math.random() * 100}%`,
            '--y-start': `${Math.random() * 100}%`,
          } as React.CSSProperties}
        >
          <div className="pokeball-top"></div>
          <div className="pokeball-center"></div>
          <div className="pokeball-bottom"></div>
        </div>
      ))}
    </div>
  );
};

export default FloatingPokeballs; 