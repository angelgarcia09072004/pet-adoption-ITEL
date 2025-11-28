import React, { useState } from 'react';

const AdoptionForm = ({ isOpen, onClose, petName }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          backdrop-filter: blur(3px);
        }

        .modal-container {
          background: white;
          width: 900px;
          max-width: 95%;
          height: 85vh;
          display: flex;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          animation: slideIn 0.3s ease-out;
          font-family: 'Poppins', sans-serif;
        }

        @keyframes slideIn {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        /* Left Side */
        .modal-left {
          width: 40%;
          background: #ff7a59;
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 40px;
        }

        .modal-logo {
          width: 80px;
          margin-bottom: 20px;
          /* Optional: keeps logo original colors. Add filter here if you want it white */
          /* filter: brightness(0) invert(1); */ 
        }

        .brand-content h2 {
          font-size: 2rem;
          margin-bottom: 10px;
          font-weight: 700;
        }

        /* Right Side */
        .modal-right {
          width: 60%;
          padding: 40px;
          position: relative;
          overflow-y: auto;
          background: #fff;
        }

        .close-btn {
          position: absolute;
          top: 15px;
          right: 20px;
          font-size: 2rem;
          background: none;
          border: none;
          cursor: pointer;
          color: #999;
          line-height: 1;
        }
        .close-btn:hover { color: #333; }

        .adoption-form h3 {
          color: #ff7a59;
          margin-bottom: 20px;
          font-size: 1.5rem;
          font-weight: 700;
        }

        .form-group {
          margin-bottom: 15px;
          display: flex;
          flex-direction: column;
          text-align: left;
        }

        .form-row {
          display: flex;
          gap: 15px;
        }

        .form-row .form-group {
          flex: 1;
        }

        label {
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 5px;
          color: #444;
        }

        input, select, textarea {
          padding: 10px 12px;
          border: 1px solid #ddd;
          border-radius: 8px;
          font-size: 0.95rem;
          outline: none;
          transition: border-color 0.2s;
          width: 100%;
          box-sizing: border-box;
        }

        input:focus, select:focus, textarea:focus {
          border-color: #ff7a59;
        }

        .radio-group {
          display: flex;
          gap: 20px;
          align-items: center;
        }
        
        .radio-group label {
            display: flex;
            align-items: center;
            gap: 5px;
            font-weight: 400;
            cursor: pointer;
        }

        .checkbox-group {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin: 20px 0;
          font-size: 0.9rem;
        }
        
        .checkbox-group input {
            width: auto;
            margin-top: 3px;
        }

        .submit-btn {
          width: 100%;
          background: #ff7a59;
          color: white;
          padding: 14px;
          border: none;
          border-radius: 10px;
          font-size: 1rem;
          font-weight: bold;
          cursor: pointer;
          transition: background 0.3s;
          margin-top: 10px;
        }

        .submit-btn:hover {
          background: #e6603f;
        }

        /* Success Message */
        .success-message {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 20px;
        }

        .success-icon {
          font-size: 4rem;
          margin-bottom: 20px;
        }

        .success-message h3 {
            color: #333;
            font-size: 1.8rem;
            margin-bottom: 10px;
        }

        .success-message p {
            color: #666;
            margin-bottom: 30px;
            line-height: 1.5;
        }

        .close-success-btn {
          padding: 12px 35px;
          border: 2px solid #ff7a59;
          background: white;
          color: #ff7a59;
          border-radius: 50px;
          cursor: pointer;
          font-weight: bold;
          font-size: 1rem;
          transition: all 0.2s;
        }
        
        .close-success-btn:hover {
            background: #ff7a59;
            color: white;
        }

        @media (max-width: 768px) {
            .modal-container {
                flex-direction: column;
                height: 90vh;
                width: 90%;
            }
            .modal-left {
                width: 100%;
                padding: 20px;
                flex-direction: row;
                gap: 15px;
                justify-content: flex-start;
                text-align: left;
            }
            .modal-logo { margin-bottom: 0; width: 50px; }
            .modal-right { width: 100%; padding: 20px; }
            .brand-content h2 { font-size: 1.5rem; margin: 0; }
            .brand-content p { display: none; }
        }
      `}</style>

      <div className="modal-container">
        <div className="modal-left">
          <img src="/logopaws.png" alt="Adoptails Logo" className="modal-logo" />
          <div className="brand-content">
            <h2>Adopt {petName}</h2>
            <p>Give them the loving home they deserve.</p>
          </div>
        </div>
        <div className="modal-right">
          <button className="close-btn" onClick={handleClose}>&times;</button>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="adoption-form">
              <h3>Adoption Form</h3>
              
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" required placeholder="xxxxx" />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Age</label>
                  <input type="number" required placeholder="xx" />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" required placeholder="xxxx xxx xxxx" />
                </div>
              </div>

              <div className="form-group">
                <label>Address</label>
                <input type="text" required placeholder="xxxxx" />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input type="email" required placeholder="email@example.com" />
              </div>

              <div className="form-group">
                <label>Employment Status</label>
                <select required defaultValue="">
                  <option value="" disabled>Select Status</option>
                  <option value="employed">Employed</option>
                  <option value="self-employed">Self-Employed</option>
                  <option value="student">Student</option>
                  <option value="unemployed">Unemployed</option>
                </select>
              </div>

              <div className="form-group">
                <label>Do you have experience with pets?</label>
                <div className="radio-group">
                  <label><input type="radio" name="experience" value="yes" required /> Yes</label>
                  <label><input type="radio" name="experience" value="no" /> No</label>
                </div>
              </div>

              <div className="form-group">
                <label>Why do you want to adopt this pet?</label>
                <textarea rows="3" required placeholder="Tell us why you are a good fit..."></textarea>
              </div>

              <div className="checkbox-group">
                <input type="checkbox" required id="terms" />
                <label htmlFor="terms">I agree to the adoption terms and conditions.</label>
              </div>

              <button type="submit" className="submit-btn">Submit Application</button>
            </form>
          ) : (
            <div className="success-message">
              <div className="success-icon">🎉</div>
              <h3>Application Received!</h3>
              <p>We will email you for more information. Please wait for our response!</p>
              <button className="close-success-btn" onClick={handleClose}>Close</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdoptionForm;