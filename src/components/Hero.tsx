import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero" id="home">
      {/* Enhanced Pokemon background with animations */}
      <div className="hero-background">
        {/* Animated clouds */}
        <div className="cloud cloud-1"></div>
        <div className="cloud cloud-2"></div>
        <div className="cloud cloud-3"></div>
        <div className="cloud cloud-4"></div>
        
        {/* Floating Pokemon sprites */}
        <div className="floating-pokemon pokemon-1"></div>
        <div className="floating-pokemon pokemon-2"></div>
        <div className="floating-pokemon pokemon-3"></div>
        <div className="floating-pokemon pokemon-4"></div>
        <div className="floating-pokemon pokemon-5"></div>
        <div className="floating-pokemon pokemon-6"></div>
        <div className="floating-pokemon pokemon-7"></div>
        <div className="floating-pokemon pokemon-8"></div>
        <div className="floating-pokemon pokemon-9"></div>
        <div className="floating-pokemon pokemon-10"></div>
        <div className="floating-pokemon pokemon-11"></div>
        <div className="floating-pokemon pokemon-12"></div>
        <div className="floating-pokemon pokemon-13"></div>
        <div className="floating-pokemon pokemon-14"></div>
        <div className="floating-pokemon pokemon-15"></div>
        

        
        {/* Butterflies */}
        <div className="butterfly butterfly-1"></div>
        <div className="butterfly butterfly-2"></div>
        <div className="butterfly butterfly-3"></div>
        
        {/* Animated particles */}
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        
        {/* Enhanced landscape */}
        <div className="landscape-elements">
          {/* Mountain silhouettes */}
          <div className="mountain mountain-1"></div>
          <div className="mountain mountain-2"></div>
          <div className="mountain mountain-3"></div>
          <div className="mountain mountain-4"></div>
          <div className="mountain mountain-5"></div>
          <div className="mountain mountain-6"></div>
          
          {/* Grass patches */}
          <div className="grass-patch grass-1"></div>
          <div className="grass-patch grass-2"></div>
          <div className="grass-patch grass-3"></div>
          <div className="grass-patch grass-4"></div>
          

        </div>
      </div>
      
      <div className="hero-content">
        {/* Pokemon-style logo section */}
        <div className="pokemon-logo">
          <h1 className="logo-text">POKEMON TCG</h1>
          <div className="logo-subtitle">INVESTMENT FUND</div>
        </div>
        
        {/* Pokemon image in center */}
        <div className="pokemon-image-container">
          <img 
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" 
            alt="Pokeball" 
            className="hero-pokemon-image"
          />
        </div>
      </div>
      
      {/* Additional Floating Pokemon Cards Layer - Above Grass */}
      <div className="floating-cards-layer">
        <div className="floating-pokemon pokemon-16"></div>
        <div className="floating-pokemon pokemon-17"></div>
        <div className="floating-pokemon pokemon-18"></div>
        <div className="floating-pokemon pokemon-19"></div>
        <div className="floating-pokemon pokemon-20"></div>
        <div className="floating-pokemon pokemon-21"></div>
        <div className="floating-pokemon pokemon-22"></div>
        <div className="floating-pokemon pokemon-23"></div>
        <div className="floating-pokemon pokemon-24"></div>
        <div className="floating-pokemon pokemon-25"></div>
        <div className="floating-pokemon pokemon-26"></div>
        <div className="floating-pokemon pokemon-27"></div>
        <div className="floating-pokemon pokemon-28"></div>
        <div className="floating-pokemon pokemon-29"></div>
        <div className="floating-pokemon pokemon-30"></div>
      </div>
      
      {/* Press Start style indicator - positioned at bottom like footer */}
      <div className="press-start-section">
        <div className="press-start-text">PRESS START</div>
        <div className="scroll-arrow"></div>
        <span className="scroll-text">SCROLL TO INVEST</span>
      </div>
      
      {/* Copyright info */}
      <div className="copyright">
        ©2024 POKEINDEX
      </div>
    </section>
  );
};

export default Hero; 