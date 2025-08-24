import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <img src="/assets/logo.png" alt="Eppley Laboratory" />
        <span>Eppley Laboratory</span>
      </div>
      <nav className="header-nav">
        <Link to="/">Home</Link>
        <Link to="/history">History</Link>
        <Link to="/applications">Applications</Link>
        <Link to="/calibrations">Calibrations</Link>
        <Link to="/solar">Solar Radiation</Link>
        <Link to="/instruments">Instruments</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;