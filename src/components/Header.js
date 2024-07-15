/**
 * The Header component renders the header section of the dashboard.
 * It contains a logo, a search bar, a button to generate a credential,
 * a user icon, and the user's information.
 */
import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import '../styles/Header.css';

/**
 * Renders the header section of the dashboard.
 *
 * @return {JSX.Element} The header section.
 */
const Header = () => (
  <header className="header">
    <div className="logo">  {/* The logo section */}
    </div>
    <div className="user-section"> {/* The user section */}
      <input type="search" className="search" /> {/* The search bar */}
      <button className="generate-credential">Generate Credential</button> {/* The button to generate a credential */}
      <FaUserCircle size={24} /> {/* The user icon */}
      <div className="user-info"> {/* The user's information */}
        <h4>John Doe</h4>
        
      </div>
      
    </div>
    
  </header>
);

export default Header;

