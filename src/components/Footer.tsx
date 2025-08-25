
import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h4>Contact</h4>
          <p>The Eppley Laboratory, Inc.<br/>12 Sheffield Avenue, Newport, RI 02840 USA</p>
          <p>Tel: 401‑847‑1020<br/>
            <a href="mailto:info@eppleylab.com">info@eppleylab.com</a></p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul className="link-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/instruments">Instruments</Link></li>
            <li><Link to="/calibrations">Calibrations</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4>Legal</h4>
          <p>© {year} The Eppley Laboratory, Inc.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          Site by Drew Kirk · UI System Integration with assistance from ChatGPT (OpenAI)
        </div>
      </div>
    </footer>
  );
};

export default Footer;
