import React from 'react';
import './Navbar.css';
import  config from './../../config.json';

function Navbar() {
    const Navbarbg = { backgroundColor: config.themeColors.Navbarbg };
  return (
    <nav style={Navbarbg} className="navbar">
      <ul >
        <li><a style={{color : config.themeColors.NavbarTextColor}} href="#">Home</a></li>
        <li><a style={{color : config.themeColors.NavbarTextColor}} href="#">About</a></li>
        <li><a style={{color : config.themeColors.NavbarTextColor}} href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;




