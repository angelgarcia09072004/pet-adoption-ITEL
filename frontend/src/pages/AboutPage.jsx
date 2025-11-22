import React from 'react';

const AboutPage = () => {
  return (
    <div style={styles.pageContainer}>
      
      {/* SECTION 1: HEADER */}
      <div style={styles.header}>
        <h1 style={styles.title}>ABOUT ADOPTAILS</h1>
        <p style={styles.subtitle}>Connecting pets with loving homes since 2024.</p>
      </div>

      <div style={styles.contentContainer}>
        
        {/* SECTION 2 & 3: MISSION & VISION (Grid Layout) */}
        <div style={styles.gridRow}>
          {/* Mission */}
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Our Mission</h2>
            <p style={styles.text}>
              At AdopTails, our mission is to save lives by connecting adoptable pets with loving families. 
              We believe every animal deserves a second chance at happiness. We work to make adoption easy, transparent, and joyful.
            </p>
          </div>

          {/* Vision */}
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Our Vision</h2>
            <p style={styles.text}>
              We envision a world where every stray and abandoned animal has a safe home. 
              By building a community of animal lovers, we aim to end pet homelessness and promote responsible pet ownership worldwide.
            </p>
          </div>
        </div>

        {/* SECTION 4: WHY ADOPT? (Highlight Box) */}
        <div style={styles.highlightBox}>
          <h2 style={{...styles.cardTitle, color: 'white'}}>Why Adopt?</h2>
          <p style={{...styles.text, color: 'white', fontWeight: '500'}}>
            Adopting a pet is life-changing. You save a life and gain a loving companion who will be loyal to you unconditionally. 
            Adopt, don’t shop!
          </p>
        </div>

        {/* SECTION 5: CONTACT INFORMATION */}
        <div style={styles.contactCard}>
          <h2 style={styles.cardTitle}>Get in Touch</h2>
          <p style={{...styles.text, marginBottom: '30px'}}>We are here to help! Contact us anytime.</p>

          <div style={styles.contactGrid}>
            {/* Email */}
            <div style={styles.contactItem}>
              <span style={styles.iconBg}>📧</span>
              <div>
                <h4 style={styles.contactLabel}>Email</h4>
                <p style={styles.contactText}>support@adoptails.com</p>
              </div>
            </div>

            {/* Phone */}
            <div style={styles.contactItem}>
              <span style={styles.iconBg}>📞</span>
              <div>
                <h4 style={styles.contactLabel}>Phone</h4>
                <p style={styles.contactText}>+63 912 345 6744</p>
              </div>
            </div>

            {/* Location */}
            <div style={styles.contactItem}>
              <span style={styles.iconBg}>📍</span>
              <div>
                <h4 style={styles.contactLabel}>Location</h4>
                <p style={styles.contactText}>AdopTails HQ, Quezon City, Philippines</p>
              </div>
            </div>

            {/* Socials */}
            <div style={styles.contactItem}>
              <span style={styles.iconBg}>📱</span>
              <div>
                <h4 style={styles.contactLabel}>Socials</h4>
                <p style={styles.contactText}>@AdopTailsOfficial</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* FOOTER LINE */}
      <div style={styles.footer}>
        <p>© 2024 AdopTails — All Rights Reserved.</p>
      </div>

    </div>
  );
};

// MODERN & ELEGANT STYLES
const styles = {
  pageContainer: {
    paddingTop: '60px', 
    minHeight: '100vh',
    backgroundColor: '#fffaf5', // Soft warm background
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    color: '#333',
  },
  header: {
    textAlign: 'center',
    marginBottom: '50px',
    padding: '0 20px',
  },
  title: {
    fontSize: '3.5rem',
    color: '#ff7a59', // Coral Accent
    fontWeight: '800',
    marginBottom: '10px',
    letterSpacing: '1px',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#888',
    fontWeight: '500',
  },
  contentContainer: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '0 20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
  },
  gridRow: {
    display: 'flex',
    gap: '30px',
    flexWrap: 'wrap', // Makes it responsive on mobile
    justifyContent: 'center',
  },
  card: {
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '25px', // Rounded 2xl
    boxShadow: '0 15px 35px rgba(0,0,0,0.05)', // Soft floating shadow
    flex: '1', // Takes equal width
    minWidth: '300px', // Prevents getting too squished
    textAlign: 'center',
    transition: 'transform 0.3s ease',
  },
  cardTitle: {
    fontSize: '1.8rem',
    color: '#333',
    marginBottom: '20px',
    fontWeight: 'bold',
  },
  text: {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: '#666',
  },
  highlightBox: {
    backgroundColor: '#ff7a59', // Soft Coral
    padding: '50px',
    borderRadius: '25px',
    textAlign: 'center',
    color: 'white',
    boxShadow: '0 20px 40px rgba(255, 122, 89, 0.25)', // Colored shadow glow
  },
  contactCard: {
    backgroundColor: 'white',
    padding: '50px',
    borderRadius: '25px',
    boxShadow: '0 15px 35px rgba(0,0,0,0.05)',
    textAlign: 'center',
  },
  contactGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', // Responsive Grid
    gap: '30px',
    marginTop: '30px',
    textAlign: 'left',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  iconBg: {
    fontSize: '1.5rem',
    backgroundColor: '#fffaf5',
    padding: '12px',
    borderRadius: '50%',
    boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
  },
  contactLabel: {
    fontSize: '0.9rem',
    color: '#999',
    marginBottom: '2px',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  contactText: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#333',
  },
  footer: {
    textAlign: 'center',
    marginTop: '80px',
    padding: '20px',
    borderTop: '1px solid #eee',
    color: '#aaa',
    fontSize: '0.9rem',
  }
};

export default AboutPage;