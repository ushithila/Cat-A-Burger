// src/components/Hero.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero-image">
      <div className="hero-text">
        <h1>Cat A Burger</h1>
        <p>100% Halal. 100% Purrrfection.</p>
        <br />
        <Link to="/menu" className="order-button">Order Now 🐾</Link>
      </div>
    </div>
  );
};

export default Hero;
