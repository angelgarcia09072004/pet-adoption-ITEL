import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import AdoptionForm from './AdoptionForm'; // Import the form

const PetCard = ({ pet }) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false); // State for the modal

  const getImageUrl = (imagePath) => {
    if (!imagePath) return "https://via.placeholder.com/300x200?text=No+Image";
    if (imagePath.startsWith("http")) return imagePath;
    if (imagePath.startsWith("/services")) return imagePath;
    return `/services/${imagePath}`;
  };

  return (
    <>
      <div className="pet-card">
        <style>{`
          .pet-card {
            background: white;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0,0,0,0.08);
            transition: all 0.3s ease;
            display: flex;
            flex-direction: column;
            position: relative;
            height: 100%;
          }

          .pet-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(255, 122, 89, 0.2);
          }

          .pet-image-container {
            width: 100%;
            height: 220px;
            background-color: #f0f0f0;
            position: relative;
          }

          .pet-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }

          .status-badge {
            position: absolute;
            top: 10px;
            right: 10px;
            background: rgba(255, 255, 255, 0.95);
            padding: 5px 12px;
            border-radius: 12px;
            font-size: 0.75rem;
            font-weight: 700;
            color: #ff7a59;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            text-transform: uppercase;
          }

          .card-content {
            padding: 15px 20px;
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            text-align: center;
          }

          .pet-name {
            font-size: 1.3rem;
            font-weight: 700;
            color: #333;
            margin: 0 0 5px 0;
          }

          .pet-info {
            font-size: 0.85rem;
            color: #666;
            margin-bottom: 15px;
            line-height: 1.4;
          }

          .btn-container {
            margin-top: auto;
            display: flex;
            flex-direction: column;
            gap: 10px;
          }

          .adopt-btn {
            background-color: #ff7a59;
            color: white;
            border: none;
            padding: 10px;
            border-radius: 8px;
            font-weight: 600;
            cursor: pointer;
            font-size: 0.9rem;
            transition: background 0.2s;
          }
          .adopt-btn:hover { background-color: #e6603d; }

          .details-btn {
            background: white;
            border: 1px solid #ff7a59;
            color: #ff7a59;
            padding: 8px;
            border-radius: 8px;
            font-weight: 600;
            cursor: pointer;
            font-size: 0.85rem;
          }
          .details-btn:hover { background: #fff0eb; }
        `}</style>

        <div className="pet-image-container">
          <img 
            src={getImageUrl(pet.image)} 
            alt={pet.name} 
            className="pet-image"
            onError={(e) => { 
              e.target.onerror = null; 
              e.target.src = "https://via.placeholder.com/300x200?text=Image+Not+Found"; 
            }}
          />
          <div className="status-badge">{pet.status || 'Available'}</div>
        </div>

        <div className="card-content">
          <h3 className="pet-name">{pet.name}</h3>
          <div className="pet-info">
            {pet.species} • {pet.breed} <br/>
            {pet.age} years old
          </div>

          <div className="btn-container">
            {/* Opens the modal on click */}
            <button className="adopt-btn" onClick={() => setIsModalOpen(true)}>
              ADOPT NOW
            </button>
            <button className="details-btn" onClick={() => navigate(`/pet/${pet._id}`)}>
              View Details
            </button>
          </div>
        </div>
      </div>

      {/* RENDER THE ADOPTION FORM MODAL HERE */}
      <AdoptionForm 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        petName={pet.name} 
      />
    </>
  );
};

export default PetCard;