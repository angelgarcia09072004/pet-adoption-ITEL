import React from "react";
import PetServices from "../components/PetServices";
import GallerySection from "../components/GallerySection"; // Assuming you have this
// import AboutUs from "../components/AboutUs"; // If you have this component

const Home = () => {
  return (
    <div>
      {/* 1. HERO SECTION IS REMOVED. We start directly with Services. */}
      
      {/* 2. Services Section */}
      <div id="services">
        <PetServices />
      </div>

      {/* 3. Gallery Section */}
      <div id="gallery">
        <GallerySection />
      </div>

      {/* 4. About Us Section (Optional if you want it on Home too) */}
      {/* <AboutUs /> */}
    </div>
  );
};

export default Home;