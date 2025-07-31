import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="pokemon-silhouettes">
          <div className="pokemon-silhouette charizard"></div>
          <div className="pokemon-silhouette pikachu"></div>
          <div className="pokemon-silhouette mewtwo"></div>
          <div className="pokemon-silhouette blastoise"></div>
        </div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="title-line">Catch the Future of</span>
            <span className="title-line highlight">Pokemon Investments</span>
          </h1>
          
          <p className="hero-subtitle">
            Join PokeIndex and become part of the most exciting Pokemon card investment fund. 
            Our expert team selects the rarest and most valuable Pokemon cards for maximum returns.
          </p>
          
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">$2.5M+</div>
              <div className="stat-label">Total Portfolio Value</div>
            </div>
            <div className="stat">
              <div className="stat-number">150+</div>
              <div className="stat-label">Rare Cards</div>
            </div>
            <div className="stat">
              <div className="stat-number">25%</div>
              <div className="stat-label">Average Annual Return</div>
            </div>
          </div>
          
          <div className="hero-cta">
            <button className="cta-button primary">
              <span className="button-text">Start Investing</span>
              <div className="pokeball-icon">⚪</div>
            </button>
            <button className="cta-button secondary">
              <span className="button-text">View Portfolio</span>
            </button>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="floating-card">
            <div className="card-glow"></div>
            <div className="card-content">
              <div className="card-header">
                <span className="card-name">Charizard</span>
                <span className="card-hp">HP 120</span>
              </div>
              <div className="card-image">
                <div className="pokemon-sprite charizard-sprite"></div>
              </div>
              <div className="card-value">$350,000</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
        <span>Scroll to invest</span>
      </div>
    </section>
  );
};

export default Hero; 