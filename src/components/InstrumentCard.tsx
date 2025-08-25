
import React from 'react';
import { Link } from 'react-router-dom';
import './InstrumentCard.css';

interface Props {
  slug: string;
  title: string;
  description: string;
  image?: string;
  badge?: string;
}

const InstrumentCard: React.FC<Props> = ({ slug, title, description, image, badge }) => {
  return (
    <article className="instrument-card card">
      <div className="thumb">
        {image ? <img src={image} alt={title} /> : <div className="placeholder" aria-hidden="true" />}
        {badge && <span className="badge">{badge}</span>}
      </div>
      <h3>{title}</h3>
      <p className="muted">{description}</p>
      <div>
        <Link to={`/instruments/${slug}`} className="btn btn--secondary">Specs →</Link>
      </div>
    </article>
  );
};

export default InstrumentCard;
