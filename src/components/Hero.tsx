import React from 'react';
import './Hero.css';

interface HeroProps {
  image: string;
  title: string;
  subtitle?: string;
}

const Hero: React.FC<HeroProps> = ({ image, title, subtitle }) => {
  return (
    <div className="hero">
      <img src={image} alt="Hero" />
      <div className="hero-overlay">
        <h1>{title}</h1>
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}
      </div>
    </div>
  );
};

export default Hero;