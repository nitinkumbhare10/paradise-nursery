import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import ProductList from './Components/ProductList';
import CartItem from './Components/CartItem';
import AboutUs from './Components/AboutUs';
import './App.css';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <h1>Paradise Nursery</h1>
      <p style={{fontSize: '1.5rem', marginBottom: '2rem', maxWidth: '600px'}}>
        Bringing the beauty of nature to your doorstep. Explore our curated collection of premium plants.
      </p>
      <button className="get-started-btn" onClick={() => navigate('/plants')}>
        Get Started
      </button>
      
      <div style={{marginTop: '4rem', background: 'rgba(255,255,255,0.1)', padding: '2rem', borderRadius: '15px', backdropFilter: 'blur(5px)'}}>
        <AboutUs />
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </Router>
  );
}

export default App;
