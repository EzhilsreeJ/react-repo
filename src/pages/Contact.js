import React from 'react';
import heroBg from '../assets/images/hero-bg.jpg'; // Example image

function Contact() {
  return (
    <div id="contact">
      <section id="hero" style={{ minHeight: '200px', backgroundImage: `url(${heroBg})` }}>
        <div className="container">
          <h1>Contact Us</h1>
        </div>
      </section>
      <div className="container">
        <div className="contact-info">
          <div className="contact-details">
            <h3>Get in Touch</h3>
            <ul>
              <li><i className="fas fa-map-marker-alt"></i> 123 Hotel Lane, Cityville, State, 12345</li>
              <li><i className="fas fa-phone"></i> +1 (123) 456-7890</li>
              <li><i className="fas fa-envelope"></i> info@ezhilhotel.com</li>
              <li><i className="fas fa-clock"></i> 24/7 Reception</li>
            </ul>
            {/* You would typically include a map embed here */}
            <div style={{ marginTop: '20px', width: '100%', height: '300px', backgroundColor: '#e0e0e0', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '8px' }}>
              <p>Hotel Location Map Placeholder</p>
            </div>
          </div>
          <div className="contact-form-section">
            <h3>Send Us a Message</h3>
            <form>
              <div>
                <label htmlFor="contact-name">Name:</label>
                <input type="text" id="contact-name" name="name" required />
              </div>
              <div>
                <label htmlFor="contact-email">Email:</label>
                <input type="email" id="contact-email" name="email" required />
              </div>
              <div>
                <label htmlFor="contact-subject">Subject:</label>
                <input type="text" id="contact-subject" name="subject" />
              </div>
              <div>
                <label htmlFor="contact-message">Message:</label>
                <textarea id="contact-message" name="message" required></textarea>
              </div>
              <button type="submit" className="button">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;