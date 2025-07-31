import React, { useState, useEffect } from 'react';
import './App.css';
import Hero from './components/Hero';
import PokemonSelection from './components/PokemonSelection';
import Footer from './components/Footer';
import FloatingPokeballs from './components/FloatingPokeballs';
import PokemonToast from './components/PokemonToast';
import { investmentService } from './lib/investmentService';
import { Investment, InvestmentStats } from './lib/supabase';

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
  const [investments, setInvestments] = useState<Investment[]>([]);
  const [stats, setStats] = useState<InvestmentStats>({
    total_users: 0,
    total_amount: 0,
    average_amount: 0
  });
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState<{
    show: boolean;
    message: string;
    type: 'success' | 'error' | 'warning' | 'info';
  }>({
    show: false,
    message: '',
    type: 'info'
  });

  // Fetch initial data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [investmentsData, statsData] = await Promise.all([
          investmentService.getInvestments(),
          investmentService.getInvestmentStats()
        ]);
        setInvestments(investmentsData);
        setStats(statsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handlePokemonSelected = async (pokemon: Pokemon, email: string, amount: number) => {
    // Refresh data after new investment
    try {
      const [investmentsData, statsData] = await Promise.all([
        investmentService.getInvestments(),
        investmentService.getInvestmentStats()
      ]);
      setInvestments(investmentsData);
      setStats(statsData);
    } catch (error) {
      console.error('Error refreshing data:', error);
    }
    
    // Show success message
    setToast({
      show: true,
      message: `🎉 Investment successful! You've selected ${pokemon.name} for your $${amount.toLocaleString()} investment. Time to catch 'em all!`,
      type: 'success'
    });
  };

  const closeToast = () => {
    setToast(prev => ({ ...prev, show: false }));
  };

  return (
    <div className="App">
      <FloatingPokeballs />
      <Hero />
      <PokemonSelection onPokemonSelected={handlePokemonSelected} />
      <Footer investments={investments} stats={stats} loading={loading} />
      
      <PokemonToast
        show={toast.show}
        message={toast.message}
        type={toast.type}
        onClose={closeToast}
        duration={6000}
      />
    </div>
  );
}

export default App;
