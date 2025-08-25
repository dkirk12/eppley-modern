
import React from 'react';
import './ApplicationCard.css';

interface Props { title: string; desc: string; icon?: string; }

const ApplicationCard: React.FC<Props> = ({ title, desc, icon }) => {
  return (
    <article className="app-card card">
      <div className="icon">{icon ? <img src={icon} alt="" /> : '🔧'}</div>
      <h3>{title}</h3>
      <p className="muted">{desc}</p>
    </article>
  );
};

export default ApplicationCard;
