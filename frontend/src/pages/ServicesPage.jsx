import { useEffect, useState } from "react";
import PetCard from "../components/PetCard";

const ServicesPage = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        // Fetching from backend Port 3000
        const response = await fetch("http://localhost:3000/api/v1/pets");
        const data = await response.json();
        setPets(data);
      } catch (error) {
        console.error("Error fetching pets:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPets();
  }, []);

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.container}>
        
        {/* Page Header */}
        <div style={styles.header}>
          <h2 style={styles.title}>Meet Our Lovely Pets!</h2>
          <p style={styles.subtitle}>Find your new best friend today.</p>
        </div>

        {loading ? (
          <p style={{textAlign: 'center'}}>Loading pets...</p>
        ) : (
          // ✅ GRID FIX: Tighter gap and centered
          <div style={styles.grid}>
            {pets.map((pet) => (
              <PetCard key={pet._id} pet={pet} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  pageWrapper: {
    minHeight: '100vh',
    backgroundColor: '#fffaf5', 
    padding: '40px 20px',
    display: 'flex',
    justifyContent: 'center', 
  },
  container: {
    width: '100%',
    maxWidth: '1000px', 
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  title: {
    fontSize: '2.2rem',
    color: '#333',
    fontWeight: '700',
    marginBottom: '10px',
    fontFamily: "'Poppins', sans-serif",
  },
  subtitle: {
    color: '#666',
    fontSize: '1rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', 
    gap: '20px', 
    justifyContent: 'center',
  }
};

export default ServicesPage;