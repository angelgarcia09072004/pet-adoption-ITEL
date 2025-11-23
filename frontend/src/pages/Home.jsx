import React from "react";
import PetServices from "../components/PetServices";
import GallerySection from "../components/GallerySection"; 

const Home = () => {
  return (
    <div>
      <div id="services">
        <PetServices />
      </div>

      <div id="gallery">
        <GallerySection />
      </div>
    </div>
  );
};

export default Home;