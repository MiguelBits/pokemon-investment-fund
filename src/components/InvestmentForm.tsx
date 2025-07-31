import React, { useState } from 'react';
import './InvestmentForm.css';

interface InvestmentFormProps {
  onSubmit: (email: string, amount: number) => void;
}

const InvestmentForm: React.FC<InvestmentFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !amount) {
      alert('Please fill in all fields!');
      return;
    }

    const numAmount = parseFloat(amount);
    if (isNaN(numAmount) || numAmount <= 0) {
      alert('Please enter a valid investment amount!');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form processing
    setTimeout(() => {
      onSubmit(email, numAmount);
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="investment-form-section" id="invest">
      <div className="form-container">
        <div className="form-header">
          <h2 className="form-title">
            <span className="title-icon">⚡</span>
            Ready to Catch Your Investment?
          </h2>
          <p className="form-subtitle">
            Join thousands of trainers who are already building their Pokemon card portfolios with PokeIndex.
          </p>
        </div>

        <form className="investment-form" onSubmit={handleSubmit}>
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
            <div className="input-glow"></div>
          </div>

          <div className="form-group">
            <label htmlFor="amount" className="form-label">
              <span className="label-icon">💰</span>
              Investment Amount ($)
            </label>
            <div className="amount-input-container">
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="form-input amount-input"
                placeholder="1000"
                min="100"
                step="100"
                required
              />
              <div className="amount-suggestions">
                <button
                  type="button"
                  className="amount-suggestion"
                  onClick={() => setAmount('1000')}
                >
                  $1K
                </button>
                <button
                  type="button"
                  className="amount-suggestion"
                  onClick={() => setAmount('5000')}
                >
                  $5K
                </button>
                <button
                  type="button"
                  className="amount-suggestion"
                  onClick={() => setAmount('10000')}
                >
                  $10K
                </button>
                <button
                  type="button"
                  className="amount-suggestion"
                  onClick={() => setAmount('25000')}
                >
                  $25K
                </button>
              </div>
            </div>
            <div className="input-glow"></div>
          </div>

          <div className="investment-benefits">
            <div className="benefit">
              <span className="benefit-icon">🎯</span>
              <span>Expert Pokemon Selection</span>
            </div>
            <div className="benefit">
              <span className="benefit-icon">📈</span>
              <span>Proven Track Record</span>
            </div>
            <div className="benefit">
              <span className="benefit-icon">🔒</span>
              <span>Secure Investment</span>
            </div>
          </div>

          <button
            type="submit"
            className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <div className="loading-spinner"></div>
                <span>Selecting Pokemon...</span>
              </>
            ) : (
              <>
                <span>Start My Investment</span>
                <span className="button-icon">⚪</span>
              </>
            )}
          </button>
        </form>

        <div className="form-footer">
          <p className="disclaimer">
            * Minimum investment: $100. Past performance does not guarantee future results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InvestmentForm; 