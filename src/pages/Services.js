import React from 'react';
import ServiceCard from '../components/ServiceCard';
import heroBg from '../assets/images/hero-bg.jpg'; // Example image

function Services() {
  const allServices = [
    {
      title: "Luxurious Accommodations",
      description: "A range of beautifully appointed rooms and suites designed for your comfort and relaxation.",
      imageUrl: "https://via.placeholder.com/300x200/f0f0f0/333333?text=Accommodations"
    },
    {
      title: "Gourmet Dining",
      description: "Experience culinary delights at our signature restaurant, offering local and international cuisine.",
      imageUrl: "https://via.placeholder.com/300x200/f0f0f0/333333?text=Dining"
    },
    {
      title: "Event & Conference Facilities",
      description: "State-of-the-art venues for meetings, conferences, and special events.",
      imageUrl: "https://via.placeholder.com/300x200/f0f0f0/333333?text=Events"
    },
    {
      title: "Fitness Center",
      description: "Stay active with our fully equipped gym and wellness facilities.",
      imageUrl: "https://via.placeholder.com/300x200/f0f0f0/333333?text=Fitness"
    },
    {
      title: "Spa & Wellness",
      description: "Rejuvenate your mind and body with our range of relaxing spa treatments.",
      imageUrl: "https://via.placeholder.com/300x200/f0f0f0/333333?text=Spa"
    },
    {
      title: "24-Hour Room Service",
      description: "Enjoy delicious meals in the comfort of your room, anytime.",
      imageUrl: "https://via.placeholder.com/300x200/f0f0f0/333333?text=Room+Service"
    },
    {
      title: "Airport Shuttle",
      description: "Convenient shuttle service to and from the airport.",
      imageUrl: "https://via.placeholder.com/300x200/f0f0f0/333333?text=Shuttle"
    },
    {
      title: "Concierge Services",
      description: "Our dedicated concierge team is ready to assist you with your needs.",
      imageUrl: "https://via.placeholder.com/300x200/f0f0f0/333333?text=Concierge"
    }
  ];

  return (
    <div id="services">
      <section id="hero" style={{ minHeight: '200px', backgroundImage: `url(${heroBg})` }}>
        <div className="container">
          <h1>Our Services</h1>
        </div>
      </section>
      <div className="container">
        <h2>What We Offer</h2>
        <div className="service-cards">
          {allServices.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;