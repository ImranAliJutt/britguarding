import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Ensure proper imports
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import VideoOverlay from './components/VideoOverlay';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Header />
        <Services />
        <VideoOverlay/>
        <ContactUs />
        <AboutUs />
        
        <Routes>
          <Route path="/services" element={<Services />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="video" element={<VideoOverlay />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
