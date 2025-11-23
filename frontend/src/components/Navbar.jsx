import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      {/* INTERNAL CSS FOR HOVER ANIMATIONS */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500;700&display=swap');

          .nav-link {
            text-decoration: none;
            color: #555;
            font-weight: 600;
            font-size: 1rem;
            position: relative;
            transition: color 0.3s ease;
            font-family: 'Quicksand', sans-serif;
          }

          .nav-link:hover {
            color: #FF7F66; /* Warm Orange Hover */
          }

          /* The Subtle Underline Animation */
          .nav-link::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: -4px;
            left: 0;
            background-color: #FF7F66;
            transition: width 0.3s ease-in-out;
          }

          .nav-link:hover::after {
            width: 100%;
          }

          .logout-btn {
            background-color: #FF6B6B; /* Soft Red */
            color: white;
            border: none;
            padding: 10px 28px;
            border-radius: 50px; /* Pill Shape */
            font-weight: 700;
            font-size: 0.9rem;
            cursor: pointer;
            transition: all 0.3s ease;
            font-family: 'Quicksand', sans-serif;
            box-shadow: 0 4px 10px rgba(255, 107, 107, 0.2);
          }

          .logout-btn:hover {
            background-color: #e05555; /* Slightly Darker Red */
            transform: translateY(-2px);
            box-shadow: 0 6px 15px rgba(255, 107, 107, 0.3);
          }
        `}
      </style>

      {/* NAVBAR STRUCTURE */}
      <nav style={styles.navContainer}>
        
        {/* LEFT: LOGO */}
        <div style={styles.logoContainer}>
          {/* Cute Paw Icon (Image or Emoji fallback) */}
          <img src="/logopaws.png" alt="Paw" style={styles.pawIcon} />
          
          {/* Aesthetic Rounded Font */}
          <span style={styles.logoText}>ADOPTAILS</span>
        </div>

        {/* RIGHT: NAVIGATION */}
        {isLoggedIn ? (
          <div style={styles.rightSection}>
            <ul style={styles.linksContainer}>
              <li><Link to="/services" className="nav-link">SERVICES</Link></li>
              <li><Link to="/gallery" className="nav-link">GALLERY</Link></li>
              <li><Link to="/about" className="nav-link">ABOUT US</Link></li>
            </ul>

            {/* LOGOUT BUTTON */}
            <button onClick={handleLogout} className="logout-btn">
              LOGOUT
            </button>
          </div>
        ) : (
          /* AUTH BUTTONS (Logged Out State) */
          <div style={styles.authContainer}>
            <Link to="/signup" style={styles.authBtn}>Sign Up</Link>
            <Link to="/signin" style={styles.authBtn}>Log In</Link>
          </div>
        )}
      </nav>
    </>
  );
};

// INLINE STYLES FOR LAYOUT
const styles = {
  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 50px',
    backgroundColor: '#fffaf5', // Cream/Soft Warm Background
    boxShadow: '0 2px 10px rgba(0,0,0,0.03)', // Very subtle shadow
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    fontFamily: '"Quicksand", sans-serif',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    cursor: 'pointer',
  },
  pawIcon: {
    height: '45px',
    width: 'auto',
  },
  logoText: {
    fontSize: '1.8rem',
    color: '#FF9F43', // Pastel Orange
    fontWeight: '700',
    letterSpacing: '1px',
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '40px',
  },
  linksContainer: {
    display: 'flex',
    gap: '35px',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  authContainer: {
    display: 'flex',
    gap: '20px',
  },
  authBtn: {
    backgroundColor: '#FF7F66',
    color: 'white',
    padding: '10px 25px',
    textDecoration: 'none',
    fontWeight: 'bold',
    borderRadius: '50px', 
    fontSize: '0.95rem',
    boxShadow: '0 4px 10px rgba(255, 127, 102, 0.2)',
    fontFamily: '"Quicksand", sans-serif',
  }
};

export default Navbar;