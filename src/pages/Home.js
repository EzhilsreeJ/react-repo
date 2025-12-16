import React from 'react';
import HeroSection from '../components/HeroSection';
import ReservationForm from '../components/ReservationForm';
import ServiceCard from '../components/ServiceCard';

function Home() {
  const featuredServices = [
    {
      title: "Luxury Rooms",
      description: "Spacious and elegantly designed rooms with modern amenities.",
      imageUrl: "https://via.placeholder.com/300x200/f0f0f0/333333?text=Luxury+Rooms"
    },
    {
      title: "Fine Dining Restaurant",
      description: "Savor exquisite dishes prepared by our world-class chefs.",
      imageUrl: "https://via.placeholder.com/300x200/f0f0f0/333333?text=Fine+Dining"
    },
    {
      title: "Conference Facilities",
      description: "State-of-the-art facilities for your business needs.",
      imageUrl: "https://via.placeholder.com/300x200/f0f0f0/333333?text=Conference+Hall"
    }
  ];

  return (
    <div>
      <HeroSection />

      <section id="main-content">
        <div className="container">
          <h2>About Ezhil Hotel</h2>
          <p>
            Ezhil Hotel is a premier destination for travelers seeking comfort, luxury, and exceptional service. Located in the heart of the city, we offer a serene escape from the hustle and bustle, combined with easy access to local attractions and business centers. Our commitment is to provide an unforgettable experience for every guest.
          </p>
          <p>
            Whether you're here for business or leisure, Ezhil Hotel provides world-class amenities, comfortable accommodations, and a warm, welcoming atmosphere.
          </p>
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <a href="/about" className="button">Learn More About Us</a>
          </div>
        </div>
      </section>

      <section id="services-preview">
        <div className="container">
          <h2>Our Services</h2>
          <div className="service-cards">
            {featuredServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                imageUrl={service.imageUrl}
              />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <a href="/services" className="button">View All Services</a>
          </div>
        </div>
      </section>

      <section id="reservation">
        <div className="container">
          <ReservationForm />
        </div>
      </section>
    </div>
  );
}

export default Home;