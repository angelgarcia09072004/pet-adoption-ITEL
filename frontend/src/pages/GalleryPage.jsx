import React from 'react';
import GallerySection from '../components/GallerySection'; 

const GalleryPage = () => {
  return (
    <div style={styles.pageContainer}>
        
        {/* HEADER SECTION */}
        <div style={styles.header}>
            <h1 style={styles.title}>
                ADOPTAILS GALLERY
            </h1>
            
            <p style={styles.description}>
                Discover our collection of lovable pets! 
                Feel free to browse and save any photos you like—just like your own Pinterest-style gallery. 
                These adorable animals are waiting to brighten your screen and your home!
            </p>
        </div>

        <GallerySection />
    </div>
  );
};

const styles = {
  pageContainer: {
    paddingTop: '60px', 
    minHeight: '100vh', 
    backgroundColor: '#fffaf5', // Soft warm background
    // THE FONT FROM ABOUT US
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif', 
  },
  header: {
    textAlign: 'center', 
    marginBottom: '50px', 
    padding: '0 20px'
  },
  title: {
    fontSize: '3rem', 
    color: '#ff7a59', 
    fontWeight: '800', 
    textTransform: 'uppercase',
    marginBottom: '20px',
    letterSpacing: '1px',
  },
  description: {
    color: '#555', 
    fontSize: '1.1rem', 
    lineHeight: '1.8',
    maxWidth: '800px', 
    margin: '0 auto', 
  }
};

export default GalleryPage;