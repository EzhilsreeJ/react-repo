import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'; // Assuming you have a logo.png

function Header() {
  return (
    <header>
      <div className="container">
        <div id="branding">
          <h1><Link to="/"><img src={logo} alt="Ezhil Hotel Logo" style={{ height: '50px', marginRight: '10px', verticalAlign: 'middle' }} /> Ezhil Hotel</Link></h1>
        </div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/rooms">Rooms</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;