import React, { useState, useEffect } from 'react';
import './PokemonSelection.css';

interface Pokemon {
  key: string;
  name: string;
  sprite: string;
  description: string;
  type: string;
  rarity: string;
  investmentPotential: string;
}

interface PokemonSelectionProps {
  onPokemonSelected: (pokemon: Pokemon, email: string, amount: number) => void;
}

const PokemonSelection: React.FC<PokemonSelectionProps> = ({ onPokemonSelected }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('1000');

  const pokemonList: Pokemon[] = [
    {
      key: "bulbasaur",
      name: "Bulbasaur",
      sprite: "🌱",
      description: "The Seed Pokemon",
      type: "Grass/Poison",
      rarity: "Common",
      investmentPotential: "High"
    },
    {
      key: "charizard",
      name: "Charizard",
      sprite: "🔥",
      description: "The Flame Pokemon",
      type: "Fire/Flying",
      rarity: "Rare",
      investmentPotential: "Very High"
    },
    {
      key: "blastoise",
      name: "Blastoise",
      sprite: "💧",
      description: "The Shellfish Pokemon",
      type: "Water",
      rarity: "Rare",
      investmentPotential: "High"
    },
    {
      key: "venusaur",
      name: "Venusaur",
      sprite: "🌱",
      description: "The Seed Pokemon",
      type: "Grass/Poison",
      rarity: "Rare",
      investmentPotential: "High"
    },
    {
      key: "mewtwo",
      name: "Mewtwo",
      sprite: "🧬",
      description: "The Genetic Pokemon",
      type: "Psychic",
      rarity: "Legendary",
      investmentPotential: "Extreme"
    }
  ];

  const totalPokemon = pokemonList.length;

  const rotateLeft = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPokemon) % totalPokemon);
  };

  const rotateRight = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPokemon);
  };

  const selectCurrentPokemon = () => {
    setSelectedPokemon(pokemonList[currentIndex]);
    setShowConfirmation(true);
  };

  const confirmSelection = () => {
    if (selectedPokemon && email) {
      setShowConfirmation(false);
      setShowFinalMessage(true);
      // Call the parent callback after a delay to show the final message
      setTimeout(() => {
        onPokemonSelected(selectedPokemon, email, parseFloat(amount));
      }, 3000);
    }
  };

  const cancelSelection = () => {
    setShowConfirmation(false);
    setSelectedPokemon(null);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (showConfirmation || showFinalMessage) return;

      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          rotateLeft();
          break;
        case 'ArrowRight':
          e.preventDefault();
          rotateRight();
          break;
        case ' ':
        case 'Enter':
          e.preventDefault();
          selectCurrentPokemon();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [showConfirmation, showFinalMessage]);

  const getPokemonPosition = (index: number) => {
    const leftIndex = (currentIndex - 1 + totalPokemon) % totalPokemon;
    const centerIndex = currentIndex;
    const rightIndex = (currentIndex + 1) % totalPokemon;

    if (index === leftIndex) return 'left';
    if (index === centerIndex) return 'center';
    if (index === rightIndex) return 'right';
    return 'hidden';
  };

  if (showConfirmation && selectedPokemon) {
    return (
      <section className="pokemon-selection-section">
        <div className="selection-container">
          <div className="confirmation-box">
            <h2 className="confirmation-title">Are you sure?</h2>
            <p className="confirmation-text">
              You want to invest in <span className="pokemon-name-highlight">{selectedPokemon.name}</span>?
            </p>
            <div className="selected-pokemon-display">
              <div className="selected-pokemon-sprite">{selectedPokemon.sprite}</div>
              <div className="pokemon-details">
                <p><strong>Type:</strong> {selectedPokemon.type}</p>
                <p><strong>Rarity:</strong> {selectedPokemon.rarity}</p>
                <p><strong>Investment Potential:</strong> {selectedPokemon.investmentPotential}</p>
              </div>
            </div>
            
            <div className="investment-form">
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  <span className="label-icon">📧</span>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input"
                  placeholder="trainer@pokemon.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="amount" className="form-label">
                  <span className="label-icon">💰</span>
                  Investment Amount ($)
                </label>
                <input
                  type="number"
                  id="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="form-input"
                  placeholder="1000"
                  min="100"
                  step="100"
                  required
                />
                <div className="amount-suggestions">
                  <button type="button" onClick={() => setAmount('1000')}>$1K</button>
                  <button type="button" onClick={() => setAmount('5000')}>$5K</button>
                  <button type="button" onClick={() => setAmount('10000')}>$10K</button>
                  <button type="button" onClick={() => setAmount('25000')}>$25K</button>
                </div>
              </div>
            </div>

            <div className="confirm-buttons">
              <button 
                className="btn confirm-btn" 
                onClick={confirmSelection}
                disabled={!email}
              >
                Yes, Invest Now!
              </button>
              <button className="btn secondary-btn" onClick={cancelSelection}>
                No, let me choose again
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (showFinalMessage && selectedPokemon) {
    return (
      <section className="pokemon-selection-section">
        <div className="selection-container">
          <div className="final-message">
            <h2 className="final-title">Congratulations!</h2>
            <p className="final-text">
              You and <span className="pokemon-name-highlight">{selectedPokemon.name}</span> are now investment partners!
            </p>
            <div className="final-pokemon-display">
              <div className="final-pokemon-sprite">{selectedPokemon.sprite}</div>
              <p className="final-description">Your Pokemon investment journey begins now!</p>
            </div>
            <p className="final-subtext">
              Take good care of your investment, and together you'll become the very best!
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="pokemon-selection-section">
      <div className="lab-background"></div>
      
      <div className="selection-container">
        <h1 className="selection-title">Choose Your Investment Pokemon!</h1>
        
        <div className="professor-text">
          Welcome to the world of Pokemon investments! My name is Professor Oak. 
          Before you stands a selection of Pokemon with excellent investment potential. 
          Use the arrow keys or click the arrows to rotate between them, then press SPACE or click SELECT to choose your investment partner!
        </div>
        
        <div className="controls-hint">
          Use ← → arrow keys or click the arrows to navigate • SPACE or SELECT to choose
        </div>
        
        <div className="carousel-container">
          <div className="navigation-arrow arrow-left" onClick={rotateLeft}>◀</div>
          
          <div className="pokeball-carousel">
            {pokemonList.map((pokemon, index) => {
              const position = getPokemonPosition(index);
              return (
                <div 
                  key={pokemon.key}
                  className={`pokeball-option ${position}`}
                  onClick={() => {
                    if (position === 'center') {
                      selectCurrentPokemon();
                    } else if (position === 'left') {
                      rotateRight();
                    } else if (position === 'right') {
                      rotateLeft();
                    }
                  }}
                >
                  <div className="pokeball"></div>
                  <div className="pokemon-sprite">{pokemon.sprite}</div>
                  <div className="pokemon-name">{pokemon.name}</div>
                  <div className="pokemon-info">
                    <div className="pokemon-type">{pokemon.type}</div>
                    <div className="pokemon-rarity">{pokemon.rarity}</div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="navigation-arrow arrow-right" onClick={rotateRight}>▶</div>
        </div>
        
        <button className="selection-button" onClick={selectCurrentPokemon}>
          SELECT
        </button>
      </div>
    </section>
  );
};

export default PokemonSelection; 