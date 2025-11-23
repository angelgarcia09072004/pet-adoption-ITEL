import React, { useEffect, useState } from 'react';
import PetCard from './PetCard'; 
import toast from 'react-hot-toast'; 

const PetServices = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/v1/pets'); 
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPets(data);
      } catch (err) {
        setError("Failed to load pet services. Please try again later.");
        console.error("Error fetching pets:", err);
        toast.error("Failed to load pet services."); 
      } finally {
        setLoading(false);
      }
    };
    fetchPets();
  }, []);

  if (loading) {
    return <div style={styles.message}>Loading pets...</div>;
  }

  if (error) {
    return <div style={styles.message} className="error-message">{error}</div>;
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Meet Our Lovely Pets!</h2>
      {pets.length === 0 ? (
        <div style={styles.message}>No pets available at the moment.</div>
      ) : (
        <div style={styles.grid}> 
          {pets.map(pet => (
            <PetCard key={pet._id} pet={pet} />
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1200px',
    margin: 'auto',
    padding: '20px',
  },
  heading: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#333',
    textAlign: 'center',
    marginBottom: '40px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
    gap: '30px',
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    fontSize: '1.2rem',
    color: '#555',
    marginTop: '50px',
  }
};

export default PetServices;