import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const GallerySection = () => {
  const [savedImages, setSavedImages] = useState({});

  const toggleSave = (imgUrl, e) => {
    e.stopPropagation(); 
    
    setSavedImages((prev) => {
      const isCurrentlySaved = !!prev[imgUrl];
      const newState = { ...prev, [imgUrl]: !isCurrentlySaved };

      if (!isCurrentlySaved) {
        // SHORT MESSAGE: "Saved!"
        toast.success("Saved!", {
          style: {
            borderRadius: '50px', // Pill shape
            background: '#fff',
            color: '#333',
            padding: '10px 20px',
            fontWeight: 'bold',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
            fontSize: '1rem',
            border: '1px solid #ff7a59',
          },
          icon: '❤️',
          duration: 1500,
        });
      } else {
        // SHORT MESSAGE: "Removed!"
        toast("Removed!", { 
          icon: '💔',
          style: {
            borderRadius: '50px',
            background: '#333',
            color: '#fff',
            padding: '10px 20px',
            fontWeight: 'bold',
            fontSize: '1rem',
          },
          duration: 1500,
        });
      }

      return newState;
    });
  };

  const dogs = [
    "/gallery/dogs/doggallery1.jpg", "/gallery/dogs/doggallery2.jpg",
    "/gallery/dogs/doggallery3.jpg", "/gallery/dogs/doggallery4.jpg",
    "/gallery/dogs/doggallery5.jpg", "/gallery/dogs/doggallery6.jpg",
    "/gallery/dogs/doggallery7.jpg", "/gallery/dogs/doggallery8.jpg",
    "/gallery/dogs/doggallery9.jpg",
  ];

  const cats = [
    "/gallery/cats/catgallery1.jpg", "/gallery/cats/catgallery2.jpg",
    "/gallery/cats/catgallery3.jpg", "/gallery/cats/catgallery4.jpg",
    "/gallery/cats/catgallery5.jpg", "/gallery/cats/catgallery6.jpg",
    "/gallery/cats/catgallery7.jpg", "/gallery/cats/catgallery8.jpg",
    "/gallery/cats/catgallery9.jpg",
  ];

  const GalleryCard = ({ img, index, type }) => {
    const isSaved = !!savedImages[img];

    return (
      <div className="gallery-card" style={styles.card}>
        <img 
          src={img} 
          alt={`${type} ${index + 1}`} 
          style={styles.image}
          onError={(e) => e.target.src = "https://via.placeholder.com/400?text=Pet"} 
        />
        <div style={styles.overlay}></div>

        <button 
          onClick={(e) => toggleSave(img, e)}
          className={`save-btn ${isSaved ? 'saved' : ''}`}
        >
          <svg 
            viewBox="0 0 24 24" 
            className="heart-icon"
            fill={isSaved ? "#ff7a59" : "none"} 
            stroke={isSaved ? "#ff7a59" : "#fff"} 
            strokeWidth="2"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </button>
      </div>
    );
  };

  return (
    <section style={styles.section}>
      
      {/* UPDATED TOASTER: Top Center */}
      <Toaster 
        position="top-center" 
        reverseOrder={false}
        toastOptions={{
          // Ensures it doesn't overlap with the navbar too much
          style: { marginTop: '20px' } 
        }}
      />

      <style>
        {`
          .gallery-card {
            transition: all 0.4s ease;
            position: relative;
          }
          .gallery-card:hover {
            transform: translateY(-10px) scale(1.02);
            box-shadow: 0 20px 40px rgba(255, 122, 89, 0.25);
            z-index: 10;
          }
          .save-btn {
            position: absolute;
            top: 15px;
            right: 15px;
            background: rgba(255, 255, 255, 0.3);
            backdrop-filter: blur(4px);
            border: none;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            opacity: 0; 
            transform: translateY(-10px);
          }
          .gallery-card:hover .save-btn, .save-btn.saved {
            opacity: 1;
            transform: translateY(0);
          }
          .save-btn.saved {
            background: white;
            box-shadow: 0 4px 15px rgba(255, 122, 89, 0.4);
          }
          .heart-icon {
            width: 22px;
            height: 22px;
            transition: transform 0.2s;
          }
          .save-btn:active .heart-icon { transform: scale(0.8); }
          .save-btn.saved .heart-icon { animation: pop 0.4s ease; }
          @keyframes pop {
            0% { transform: scale(1); }
            50% { transform: scale(1.3); }
            100% { transform: scale(1); }
          }
        `}
      </style>

      {/* --- DOGS --- */}
      <div style={styles.categoryContainer}>
        <h2 style={styles.categoryTitle}>DOG'S GALLERY</h2>
        <div style={styles.grid}>
          {dogs.map((img, index) => (
            <GalleryCard key={`dog-${index}`} img={img} index={index} type="Dog" />
          ))}
        </div>
      </div>

      {/* --- CATS --- */}
      <div style={styles.categoryContainer}>
        <h2 style={styles.categoryTitle}>CAT'S GALLERY</h2>
        <div style={styles.grid}>
          {cats.map((img, index) => (
            <GalleryCard key={`cat-${index}`} img={img} index={index} type="Cat" />
          ))}
        </div>
      </div>

    </section>
  );
};

const styles = {
  section: {
    padding: '20px 20px 60px 20px',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
  },
  categoryContainer: {
    maxWidth: '1200px',
    margin: '0 auto 80px auto',
    textAlign: 'center',
  },
  categoryTitle: {
    fontSize: '2.5rem',
    color: '#333',
    fontWeight: '800',
    marginBottom: '40px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    borderBottom: '4px solid #ff7a59',
    display: 'inline-block',
    paddingBottom: '10px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '30px',
    padding: '10px',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '25px',
    boxShadow: '0 10px 20px rgba(0,0,0,0.08)',
    overflow: 'hidden',
    height: '300px',
    position: 'relative',
    cursor: 'pointer',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(to top, rgba(0,0,0,0.15), transparent)',
    pointerEvents: 'none',
  }
};

export default GallerySection;