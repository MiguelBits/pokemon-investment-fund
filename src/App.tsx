import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import PokemonSelection from './components/PokemonSelection';
import Footer from './components/Footer';
import FloatingPokeballs from './components/FloatingPokeballs';

interface Pokemon {
  key: string;
  name: string;
  sprite: string;
  description: string;
  type: string;
  rarity: string;
  investmentPotential: string;
}

function App() {
  const [investments, setInvestments] = useState<Array<{
    email: string;
    amount: number;
    selectedPokemon: Pokemon;
    timestamp: Date;
  }>>([]);

  const handlePokemonSelected = (pokemon: Pokemon, email: string, amount: number) => {
    const newInvestment = {
      email,
      amount,
      selectedPokemon: pokemon,
      timestamp: new Date()
    };
    setInvestments(prev => [...prev, newInvestment]);
    
    // Show success message
    alert(`Investment successful! You've selected ${pokemon.name} for your $${amount} investment.`);
  };

  return (
    <div className="App">
      <FloatingPokeballs />
      <Header />
      <Hero />
      <PokemonSelection onPokemonSelected={handlePokemonSelected} />
      <Footer investments={investments} />
    </div>
  );
}

export default App;
