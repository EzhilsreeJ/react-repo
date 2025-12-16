import React from 'react';
import heroBg from '../assets/images/hero-bg.jpg'; // Example image

function About() {
  return (
    <div id="about">
      <section id="hero" style={{ minHeight: '200px', backgroundImage: `url(${heroBg})` }}>
        <div className="container">
          <h1>About Ezhil Hotel</h1>
        </div>
      </section>
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <img src="https://via.placeholder.com/500x400/cccccc/333333?text=Hotel+Exterior" alt="Ezhil Hotel Exterior" />
          </div>
          <div className="about-text">
            <h2>Discover Our Story</h2>
            <p>
              Ezhil Hotel was founded with a vision to create a sanctuary of comfort and elegance in the heart of the city. For years, we have been dedicated to providing exceptional hospitality, blending modern sophistication with traditional warmth. Our mission is to make every guest's stay memorable and enjoyable.
            </p>
            <p>
              We pride ourselves on our attentive staff, luxurious amenities, and a prime location that makes us the perfect choice for both leisure and business travelers. Our journey has been one of continuous improvement, always striving to exceed expectations and set new standards in the hospitality industry.
            </p>
            <h3>Our Values</h3>
            <ul>
              <li>Exceptional Service</li>
              <li>Guest Comfort</li>
              <li>Quality & Excellence</li>
              <li>Integrity & Respect</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;