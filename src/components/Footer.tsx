import React from 'react';
import './Footer.css';

interface Pokemon {
  key: string;
  name: string;
  sprite: string;
  description: string;
  type: string;
  rarity: string;
  investmentPotential: string;
}

interface Investment {
  email: string;
  amount: number;
  selectedPokemon: Pokemon;
  timestamp: Date;
}

interface FooterProps {
  investments: Investment[];
}

const Footer: React.FC<FooterProps> = ({ investments }) => {
  const totalInvestments = investments.length;
  const totalAmount = investments.reduce((sum, inv) => sum + inv.amount, 0);
  const averageAmount = totalInvestments > 0 ? totalAmount / totalInvestments : 0;

  const recentInvestments = investments.slice(-3).reverse();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">
            <span className="title-icon">📊</span>
            Investment Statistics
          </h3>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">{totalInvestments}</div>
              <div className="stat-label">Total Investors</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">${totalAmount.toLocaleString()}</div>
              <div className="stat-label">Total Invested</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">${averageAmount.toLocaleString()}</div>
              <div className="stat-label">Average Investment</div>
            </div>
          </div>
        </div>

        {recentInvestments.length > 0 && (
          <div className="footer-section">
            <h3 className="footer-title">
              <span className="title-icon">⚡</span>
              Recent Investments
            </h3>
            <div className="recent-investments">
              {recentInvestments.map((investment, index) => (
                <div key={index} className="investment-item">
                  <div className="investment-pokemon">
                    <span className="pokemon-emoji">
                      {investment.selectedPokemon.sprite}
                    </span>
                    <span className="pokemon-name">{investment.selectedPokemon.name}</span>
                  </div>
                  <div className="investment-details">
                    <div className="investment-amount">${investment.amount.toLocaleString()}</div>
                    <div className="investment-time">
                      {investment.timestamp.toLocaleDateString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="footer-section">
          <h3 className="footer-title">
            <span className="title-icon">🎯</span>
            About PokeIndex
          </h3>
          <p className="footer-description">
            PokeIndex is the premier Pokemon card investment fund, helping trainers build 
            valuable portfolios of rare and collectible Pokemon cards. Our expert team 
            carefully selects the most promising investments for maximum returns.
          </p>
          <div className="footer-links">
            <a href="#terms" className="footer-link">Terms of Service</a>
            <a href="#privacy" className="footer-link">Privacy Policy</a>
            <a href="#contact" className="footer-link">Contact Us</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="copyright">
            © 2024 PokeIndex. All rights reserved. Gotta invest 'em all! ⚪
          </p>
          <div className="social-links">
            <a href="#" className="social-link">📱</a>
            <a href="#" className="social-link">🐦</a>
            <a href="#" className="social-link">📘</a>
            <a href="#" className="social-link">📷</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 