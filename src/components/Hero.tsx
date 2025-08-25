import React from 'react';
import './Hero.css';

interface Cta {
  label: string;
  href: string;
  primary?: boolean;
}
interface HeroProps {
  image?: string;          // optional — when omitted, renders a plain header
  title: string;
  subtitle?: string;
  kicker?: string;
  ctas?: Cta[];
  compact?: boolean;       // reduce vertical space
}

const Hero: React.FC<HeroProps> = ({ image, title, subtitle, kicker, ctas = [], compact }) => {
  const isPlain = !image;
  const cls = ['hero', isPlain ? 'hero--plain' : '', compact ? 'hero--compact' : ''].join(' ').trim();
  const style = image ? { backgroundImage: `url(${image})` } : undefined;

  return (
    <div className={cls} style={style}>
      <div className="hero-overlay">
        {kicker && <div className="kicker">{kicker}</div>}
        <h1>{title}</h1>
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}
        {ctas.length > 0 && (
          <div className="cta-row">
            {ctas.map((c, i) => (
              <a key={i} href={c.href} className={`btn ${c.primary ? 'btn--primary' : 'btn--secondary'}`}>
                {c.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
