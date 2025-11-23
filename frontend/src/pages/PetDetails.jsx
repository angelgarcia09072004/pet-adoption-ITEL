import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast'; 

const PetDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pet, setPet] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/pets/${id}`)
      .then((res) => res.json())
      .then((data) => setPet(data))
      .catch((err) => {
        console.error("Error fetching pet details:", err);
        toast.error("Could not load pet details.");
      });
  }, [id]);

  const handleAdoptClick = () => {
    toast.success("We will email you for more information. Please wait for our response!", {
      duration: 4000,
      style: {
        border: '1px solid #ff7a59',
        padding: '16px',
        color: '#333',
        borderRadius: '12px',
        background: '#fff',
        fontWeight: '500',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        fontSize: '1rem',
        maxWidth: '400px', 
        textAlign: 'center'
      },
      iconTheme: {
        primary: '#ff7a59',
        secondary: '#FFFAEE',
      },
    });
  };

  if (!pet) return <div style={{textAlign: 'center', marginTop: '50px', color: '#777'}}>Loading furry friend...</div>;

  return (
    <div style={styles.pageWrapper}>
      
      <Toaster position="top-center" reverseOrder={false} />

      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');`}
      </style>

      <div style={styles.container}>
        
        {/* LEFT SIDE: IMAGE */}
        <div style={styles.imageSection}>
            <img 
                src={pet.image ? `/services/${pet.image}` : "https://via.placeholder.com/500"} 
                alt={pet.name} 
                style={styles.image} 
                onError={(e) => e.target.src = "https://via.placeholder.com/500?text=Image+Not+Found"}
            />
        </div>
        
        {/* RIGHT SIDE: INFO */}
        <div style={styles.infoSection}>
          
          {/* Header Info */}
          <div>
            <h1 style={styles.name}>{pet.name}</h1>
            <h3 style={styles.breed}>{pet.breed} <span style={styles.species}>({pet.species})</span></h3>
            
            {/* Badges */}
            <div style={styles.badgesRow}>
              <span style={styles.badge}>🎂 {pet.age ? `${pet.age} Years Old` : 'Age Unknown'}</span>
              <span style={{...styles.badge, backgroundColor: pet.status === 'AVAILABLE' ? '#e6fffa' : '#fff5f5', color: pet.status === 'AVAILABLE' ? '#2c7a7b' : '#c53030'}}>
                {pet.status === 'AVAILABLE' ? '✅ Available' : '🚫 Adopted'}
              </span>
            </div>
          </div>

          {/* Description */}
          <div style={styles.descriptionBox}>
            <p style={styles.descriptionLabel}>About Me:</p>
            <p style={styles.descriptionText}>
               This lovable pet is patiently waiting for a forever home. Friendly, gentle, and fully vaccinated, 
               they are healthy and ready to meet you. Whether you're looking for companionship, warmth, or a loyal friend, 
               this pet is excited to become part of a caring family that will give them the love they truly deserve.
            </p>
          </div>

          {/* Buttons */}
          <div style={styles.buttonGroup}>
              <button 
                  onClick={handleAdoptClick}
                  style={styles.adoptBtn}
                  onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                  onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
              >
                  ADOPT NOW
              </button>
              
              <button 
                  onClick={() => navigate('/home')}
                  style={styles.backBtn}
              >
                  GO BACK
              </button>
          </div>
        </div>

      </div>
    </div>
  );
};

const styles = {
  pageWrapper: {
    minHeight: '100vh',
    backgroundColor: '#fffaf5', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px 20px',
    fontFamily: "'Poppins', sans-serif",
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap', 
    maxWidth: '1100px',
    width: '100%',
    backgroundColor: 'transparent',
    gap: '60px', 
    alignItems: 'center',
  },
  imageSection: {
    flex: '1',
    minWidth: '300px',
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    maxWidth: '480px', 
    borderRadius: '30px', 
    boxShadow: '0 20px 40px rgba(0,0,0,0.08)', 
    objectFit: 'cover',
    aspectRatio: '1/1', 
  },
  infoSection: {
    flex: '1.2', 
    minWidth: '300px',
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
  },
  name: {
    fontSize: '3.5rem',
    fontWeight: '800',
    color: '#ff7a59',
    marginBottom: '5px',
    lineHeight: '1.1',
  },
  breed: {
    fontSize: '1.5rem',
    color: '#555',
    fontWeight: '500',
    marginBottom: '20px',
  },
  species: {
    fontSize: '1rem',
    color: '#999',
    fontWeight: '400',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  badgesRow: {
    display: 'flex',
    gap: '15px',
    marginBottom: '10px',
  },
  badge: {
    padding: '8px 16px',
    borderRadius: '50px',
    backgroundColor: '#fff',
    border: '1px solid #eee',
    fontSize: '0.9rem',
    fontWeight: '600',
    color: '#555',
    boxShadow: '0 2px 5px rgba(0,0,0,0.02)',
  },
  descriptionBox: {
    marginTop: '10px',
  },
  descriptionLabel: {
    fontWeight: 'bold',
    color: '#333',
    fontSize: '1.1rem',
    marginBottom: '8px',
  },
  descriptionText: {
    fontSize: '1.05rem',
    lineHeight: '1.8', 
    color: '#666',
    textAlign: 'justify',
  },
  buttonGroup: {
    display: 'flex',
    gap: '20px',
    marginTop: '20px',
  },
  adoptBtn: {
    padding: '16px 32px',
    backgroundColor: '#ff7a59',
    color: 'white',
    border: 'none',
    borderRadius: '15px',
    fontSize: '1rem',
    fontWeight: '700',
    cursor: 'pointer',
    boxShadow: '0 10px 20px rgba(255, 122, 89, 0.25)', 
    transition: 'transform 0.2s ease',
    letterSpacing: '0.5px',
    flex: 1, 
  },
  backBtn: {
    padding: '16px 32px',
    backgroundColor: '#fff',
    color: '#555',
    border: '2px solid #eee', 
    borderRadius: '15px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background 0.2s',
    flex: 0.5,
  }
};

export default PetDetails;