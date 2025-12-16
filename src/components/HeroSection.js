import React from 'react';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <section id="hero">
      <div className="container">
        <h1>Welcome to Ezhil Hotel</h1>
        <p>Experience comfort and luxury like never before.</p>
        <Link to="/services" className="button button-primary">Explore Our Services</Link>
      </div>
    </section>
  );
}

export default HeroSection;