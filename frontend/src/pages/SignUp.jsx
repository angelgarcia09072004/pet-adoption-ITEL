import { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; 
import toast from "react-hot-toast";

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "", 
    username: "",
    email: "", 
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
        toast.error("Passwords do not match!");
        return;
    }

    try {
        const dataToSend = {
            name: formData.name, 
            username: formData.username,
            email: formData.email, 
            password: formData.password
        };

        const response = await fetch("http://localhost:3000/api/v1/auth/signup", { 
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dataToSend),
        });
        
        const data = await response.json();

        if (response.ok) {
            toast.success("Successfully created an account! Redirecting to login...");
            setTimeout(() => { 
                navigate("/signin"); 
            }, 2000); 
        } else {
            if (data.message && data.message.includes("name: Path `name` is required.")) {
                toast.error("Signup failed: Your Name is required.");
            } else {
                toast.error(data.message || "Signup failed. Please try again.");
            }
        }
    } catch (error) {
        console.error("Signup connection error:", error); 
        toast.error("Connection error. Please try again."); 
    }
  };

  return (
    <div style={styles.pageContainer}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

          .input-field:focus {
            border-color: #ff7a59 !important;
            box-shadow: 0 0 0 4px rgba(255, 122, 89, 0.1);
            outline: none;
            background: white !important;
          }
          .auth-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(255, 122, 89, 0.3);
          }
          .back-btn:hover {
            background-color: rgba(255,255,255,0.8) !important;
            transform: scale(1.1);
          }
        `}
      </style>

      <div style={styles.glassBox}>

        {/* BACK ARROW */}
        <button
            onClick={() => navigate('/')}
            className="back-btn"
            style={styles.backButton}
            title="Back to Home"
        >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff7a59" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
        </button>

        <h2 style={styles.title}>Create Account</h2>
        <p style={styles.subtitle}>Join our community of pet lovers.</p>

        <form onSubmit={handleSubmit} style={styles.form}>

          {/* NAME FIELD */}
          <div style={styles.inputGroup}>
            <input
              type="text"
              name="name"
              placeholder="Your Name" 
              onChange={handleChange}
              className="input-field"
              style={styles.input}
              required
            />
          </div>

          {/* USERNAME */}
          <div style={styles.inputGroup}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              className="input-field"
              style={styles.input}
              required
            />
          </div>

          {/* EMAIL */}
          <div style={styles.inputGroup}>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              className="input-field"
              style={styles.input}
              required
            />
          </div>

          {/* PASSWORD */}
          <div style={styles.inputGroup}>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              className="input-field"
              style={styles.input}
              required
            />
          </div>

          {/* CONFIRM PASSWORD */}
          <div style={styles.inputGroup}>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
              className="input-field"
              style={styles.input}
              required
            />
          </div>

          <button type="submit" className="auth-btn" style={styles.button}>
            SIGN UP
          </button>
        </form>

        <p style={styles.footerText}>
            Already have an account? <Link to="/signin" style={styles.link}>Log In</Link>
        </p>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), url("/bg1firstscreen.png")`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom center',
    backgroundColor: '#fffaf5',
    fontFamily: "'Poppins', sans-serif",
  },
  glassBox: {
    position: 'relative',
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    padding: '40px 40px',
    borderRadius: '30px',
    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center',
    border: '1px solid rgba(255, 255, 255, 0.8)',
    marginBottom: '80px'
  },
  backButton: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    background: 'rgba(255,255,255,0.5)',
    border: 'none',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  title: {
    fontSize: '2.2rem',
    color: '#333',
    marginBottom: '5px',
    fontWeight: '700',
    letterSpacing: '-0.5px',
  },
  subtitle: {
    color: '#666',
    fontSize: '0.95rem',
    marginBottom: '25px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px' 
  },
  inputGroup: {
    textAlign: 'left',
  },
  input: {
    width: '100%',
    padding: '14px 18px',
    borderRadius: '12px',
    border: '1px solid #e0e0e0',
    fontSize: '1rem',
    backgroundColor: 'rgba(255,255,255,0.9)',
    fontFamily: "'Poppins', sans-serif",
    color: '#333',
  },
  button: {
    padding: '16px',
    borderRadius: '12px',
    border: 'none',
    backgroundColor: '#ff7a59',
    color: 'white',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    marginTop: '10px',
    letterSpacing: '1px',
  },
  footerText: {
    marginTop: '25px',
    fontSize: '0.9rem',
    color: '#666',
  },
  link: {
    color: '#ff7a59',
    fontWeight: '700',
    textDecoration: 'none',
    marginLeft: '5px'
  }
};

export default SignUp;