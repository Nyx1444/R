import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <h2>Find your dream home</h2>
      <input type="text" placeholder="Enter city, address, or ZIP code" />
      <button className="search-button">Search</button>
    </section>
  );
};

export default HeroSection;
