import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero" style={styles.heroContainer}>
      
      {/* Import the Modern Font (Poppins) directly here */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap');
          
          .hero-btn {
            transition: all 0.3s ease;
          }
          .hero-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(255, 122, 89, 0.3);
            background-color: #ff8f73 !important; /* Slightly lighter orange on hover */
          }
        `}
      </style>

      <div className="hero-center-content" style={styles.contentBox}>
        <h1 style={styles.title}>Welcome To AdopTails</h1>
        
        <div style={styles.subtitleContainer}>
          <p style={styles.subtitle}>
            Find love. Save a life. Adopt a pet.
          </p>
          <p style={styles.tagline}>
            Start your journey with us today!
          </p>
        </div>

        <button 
          className="hero-btn"
          onClick={() => navigate('/signup')}
          style={styles.button}
        >
          ADOPT NOW!
        </button>
      </div>
    </section>
  );
};

const styles = {
  heroContainer: {
    // Logic to fit screen minus navbar
    height: 'calc(100vh - 80px)', 
    width: '100%',
    overflow: 'hidden', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    
    // Background Setup (Kept your settings)
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url("/bg1firstscreen.png")`,
    backgroundSize: 'contain', 
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom center', 
    backgroundColor: '#fffaf5', 
  },
  contentBox: {
    textAlign: 'center',
    padding: '0 20px',
    maxWidth: '850px', // REFINED WIDTH: Prevents text from stretching too wide
    marginBottom: '120px', // Keeps content above the animals
    fontFamily: "'Poppins', sans-serif", // The new Modern Font
  },
  title: {
    fontSize: '4.5rem', // Large and impactful
    fontWeight: '800', // Extra Bold
    color: '#ff7a59', 
    marginBottom: '20px',
    lineHeight: '1.1', // Tighter line height for a "Logo-like" feel
    letterSpacing: '-1px', // Tighter spacing is more modern
    textShadow: '0 2px 10px rgba(255, 122, 89, 0.1)', // Very subtle depth
  },
  subtitleContainer: {
    marginBottom: '40px',
  },
  subtitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#d46b50', // Slightly darker/richer orange for contrast
    marginBottom: '5px',
  },
  tagline: {
    fontSize: '1.2rem',
    fontWeight: '400',
    color: '#e07b56', // Softer orange
  },
  button: {
    padding: '16px 48px',
    fontSize: '1.1rem',
    backgroundColor: '#ff7a59',
    color: 'white',
    border: 'none',
    borderRadius: '50px', // Perfectly round pill shape
    cursor: 'pointer',
    fontWeight: '700',
    letterSpacing: '1px', // Spaced out uppercase letters
    boxShadow: '0 5px 15px rgba(255, 122, 89, 0.2)', // Soft shadow
    fontFamily: "'Poppins', sans-serif",
  }
};

export default Hero;