
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

interface HeaderProps {
  transparent?: boolean;    // when true, start transparent (over hero)
  withTopbar?: boolean;     // optional phone/email bar
}

const Header: React.FC<HeaderProps> = ({ transparent = false, withTopbar = false }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    // close mobile menu on route change
    setMenuOpen(false);
  }, [pathname, hash]);

  const headerClass = [
    'header',
    transparent && !scrolled ? 'header--transparent' : '',
    scrolled ? 'header--elevated' : ''
  ].join(' ');

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      {withTopbar && (
        <div className="topbar">
          <span>Tel: 401‑847‑1020</span>
          <a href="mailto:info@eppleylab.com">info@eppleylab.com</a>
        </div>
      )}
      <header className={headerClass}>
        <div className="header-inner container">
          <div className="header-logo">
            <Link to="/" aria-label="Go to home">
              <img src="/assets/logo.png" alt="Eppley Laboratory logo" className="logo-img" />
            </Link>
            <span className="brand">Eppley Laboratory</span>
          </div>
          <nav className={`header-nav ${menuOpen ? 'open' : ''}`} aria-label="Primary">
            <Link to="/">HOME</Link>
            <Link to="/instruments">INSTRUMENTS</Link>
            <Link to="/history">HISTORY</Link>
            <Link to="/solar">SOLAR RADIATION</Link>
            <Link to="/applications">APPLICATIONS</Link>
            <Link to="/calibrations">CALIBRATIONS</Link>
            <Link to="/contact">CONTACT</Link>
          </nav>
          <button
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
