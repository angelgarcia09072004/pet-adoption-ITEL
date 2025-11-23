import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero" style={styles.heroContainer}>
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
    height: 'calc(100vh - 80px)', 
    width: '100%',
    overflow: 'hidden', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url("/bg1firstscreen.png")`,
    backgroundSize: 'contain', 
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom center', 
    backgroundColor: '#fffaf5', 
  },
  contentBox: {
    textAlign: 'center',
    padding: '0 20px',
    maxWidth: '850px',
    marginBottom: '120px', 
    fontFamily: "'Poppins', sans-serif", 
  },
  title: {
    fontSize: '4.5rem', 
    fontWeight: '800', 
    color: '#ff7a59', 
    marginBottom: '20px',
    lineHeight: '1.1', 
    letterSpacing: '-1px', 
    textShadow: '0 2px 10px rgba(255, 122, 89, 0.1)', 
  },
  subtitleContainer: {
    marginBottom: '40px',
  },
  subtitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#d46b50', 
    marginBottom: '5px',
  },
  tagline: {
    fontSize: '1.2rem',
    fontWeight: '400',
    color: '#e07b56', 
  },
  button: {
    padding: '16px 48px',
    fontSize: '1.1rem',
    backgroundColor: '#ff7a59',
    color: 'white',
    border: 'none',
    borderRadius: '50px', 
    cursor: 'pointer',
    fontWeight: '700',
    letterSpacing: '1px', 
    boxShadow: '0 5px 15px rgba(255, 122, 89, 0.2)', 
    fontFamily: "'Poppins', sans-serif",
  }
};

export default Hero;