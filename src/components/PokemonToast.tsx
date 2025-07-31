import React, { useEffect, useState } from 'react';
import './PokemonToast.css';

interface PokemonToastProps {
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title?: string;
  duration?: number;
  onClose?: () => void;
  show: boolean;
}

const PokemonToast: React.FC<PokemonToastProps> = ({
  message,
  type = 'info',
  title,
  duration = 5000,
  onClose,
  show
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
      
      if (duration > 0) {
        const timer = setTimeout(() => {
          setIsVisible(false);
          setTimeout(() => {
            onClose?.();
          }, 300); // Wait for animation to complete
        }, duration);
        
        return () => clearTimeout(timer);
      }
    }
  }, [show, duration, onClose]);

  const getIcon = () => {
    switch (type) {
      case 'success':
        return '✅';
      case 'error':
        return '❌';
      case 'warning':
        return '⚠️';
      default:
        return 'ℹ️';
    }
  };

  const getTitle = () => {
    if (title) return title;
    
    switch (type) {
      case 'success':
        return 'Success!';
      case 'error':
        return 'Oops!';
      case 'warning':
        return 'Warning!';
      default:
        return 'Info';
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose?.();
    }, 300);
  };

  if (!show && !isVisible) return null;

  return (
    <div className={`pokemon-toast ${type} ${isVisible ? 'show' : ''}`}>
      <button className="pokemon-toast-close" onClick={handleClose}>
        ✕
      </button>
      
      <div className="pokemon-toast-header">
        <span className="pokemon-toast-icon">{getIcon()}</span>
        <h3 className="pokemon-toast-title">{getTitle()}</h3>
      </div>
      
      <p className="pokemon-toast-message">{message}</p>
    </div>
  );
};

export default PokemonToast; 