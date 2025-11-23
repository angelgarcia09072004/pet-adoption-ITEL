import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp.jsx";
import PetDetails from "./pages/PetDetails";
import Hero from "./components/Hero";
import { Toaster } from "react-hot-toast";
import ServicesPage from "./pages/ServicesPage"; 
import GalleryPage from "./pages/GalleryPage";

const Landing = () => {
  const isLoggedIn = localStorage.getItem("token");
  if (isLoggedIn) {
    return <Navigate to="/home" replace />;
  }
  return <Hero />;
};

function PrivateRoute({ children }) {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/signin" replace />;
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* USER PAGES */}
        <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} /> 
        <Route path="/services" element={<PrivateRoute><ServicesPage /></PrivateRoute>} />
        <Route path="/gallery" element={<PrivateRoute><GalleryPage /></PrivateRoute>} />
        <Route path="/about" element={<PrivateRoute><AboutPage /></PrivateRoute>} />
        
        <Route path="/pet/:id" element={<PrivateRoute><PetDetails /></PrivateRoute>} />
      </Routes>
    </Router>
  );
}