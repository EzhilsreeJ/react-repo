import React from 'react';
import heroBg from '../assets/images/hero-bg.jpg'; // Example image

function Rooms() {
  const roomTypes = [
    {
      name: "Standard Room",
      description: "Comfortable and well-appointed rooms perfect for solo travelers or couples.",
      imageUrl: "https://via.placeholder.com/400x300/f0f0f0/333333?text=Standard+Room",
      features: ["Queen Bed", "En-suite Bathroom", "Free Wi-Fi", "Air Conditioning"]
    },
    {
      name: "Deluxe Room",
      description: "Spacious rooms with enhanced amenities and city views.",
      imageUrl: "https://via.placeholder.com/400x300/e0e0e0/333333?text=Deluxe+Room",
      features: ["King Bed", "Balcony", "Mini-fridge", "Work Desk"]
    },
    {
      name: "Suite",
      description: "Luxurious suites offering separate living areas and premium services.",
      imageUrl: "https://via.placeholder.com/400x300/d0d0d0/333333?text=Suite",
      features: ["King Bed", "Living Area", "Jacuzzi Tub", "Complimentary Breakfast"]
    }
  ];

  return (
    <div id="rooms">
      <section id="hero" style={{ minHeight: '200px', backgroundImage: `url(${heroBg})` }}>
        <div className="container">
          <h1>Our Rooms</h1>
        </div>
      </section>
      <div className="container">
        <h2>Choose Your Perfect Accommodation</h2>
        <div className="room-listings" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '30px' }}>
          {roomTypes.map((room, index) => (
            <div key={index} className="room-card" style={{ background: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', textAlign: 'center' }}>
              <img src={room.imageUrl} alt={room.name} style={{ maxWidth: '100%', height: '250px', objectFit: 'cover', borderRadius: '4px', marginBottom: '15px' }} />
              <h3>{room.name}</h3>
              <p>{room.description}</p>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '15px', textAlign: 'left' }}>
                {room.features.map((feature, fIndex) => (
                  <li key={fIndex} style={{ marginBottom: '5px', display: 'flex', alignItems: 'center' }}>
                    <i className="fas fa-check-circle" style={{ marginRight: '8px', color: '#28a745' }}></i> {feature}
                  </li>
                ))}
              </ul>
              <a href="#reservation" className="button" style={{ marginTop: '20px', display: 'inline-block' }}>Book Now</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Rooms;